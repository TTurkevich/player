import axios from 'axios'
import * as api from './config'
import { revertAll } from '../features/general-action'
import { refreshToken } from '../features/user/user-actions'
import { store } from '../store/store'

export const apiClient = axios.create({
  baseURL: api.BASE_URL,
  validateStatus: (status) => status < 500,
})

let refreshTokenRequest = null

async function requestValidAccessToken() {
  const user = store.getState().user

  let accessToken = user.userToken.access

  //приводим текущее время к unix timestamp
  const now = Math.floor(Date.now() * 0.001)

  if (now > user.userTokenExpires.refreshTokenExpires) {
    //разлогиниваем пользователя!!!
    store.dispatch(revertAll())
  } else if (now > user.userTokenExpires.accessTokenExpires) {
    // если не было запроса на обновление
    // создаем запрос и запоминаем его в переменную
    // для избежания race condition
    if (refreshTokenRequest === null) {
      refreshTokenRequest = store.dispatch(refreshToken())
    }
    // а теперь резолвим этот запрос
    const data = await refreshTokenRequest
    accessToken = data.payload

    // и очищаем переменную
    refreshTokenRequest = null
  }

  // возвращаем рабочий accessToken
  return accessToken
}

// обрабатываем запрос перед отправкой
apiClient.interceptors.request.use(async (config) => {
  // если указан флаг skipAuth, пропускаем запрос дальше как есть

  if (config.skipAuth) {
    return config
  }

  // иначе запрашиваем валидный accessToken
  const accessToken = await requestValidAccessToken()

  // и возвращаем пропатченный конфиг с токенов в заголовке
  return {
    ...config,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }
})

// обрабатываем запрос перед обработкой ответа от сервера
apiClient.interceptors.response.use(
  (response) => {
    const {
      data: { errors },
      status,
    } = response

    if (status === 401) {
      store.dispatch(revertAll())
    } else if (errors) {
      console.log('ошибки', errors)
    }
    return response
  },
  (error) => Promise.reject(error)
)
