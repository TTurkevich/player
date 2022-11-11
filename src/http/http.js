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
  console.log('проверяю валидность токена')
  const user = store.getState().user

  let accessToken = user.userToken.access
  
  //приводим текущее время к unix timestamp
  const now = Math.floor(Date.now() * 0.001)

  if (now > user.userTokenExpires.refreshTokenExpires) {
    console.log('разлогиниваем пользователя, рефреш токен устарел!!!')
    //разлогиниваем пользователя!!!
    store.dispatch(revertAll())
  } else if (now > user.userTokenExpires.accessTokenExpires) {
    console.log('access токен устарел')
    // если не было запроса на обновление
    // создаем запрос и запоминаем его в переменную
    // для избежания race condition
    if (refreshTokenRequest === null) {
      console.log('отправляем рефреш!!')
      refreshTokenRequest = store.dispatch(refreshToken())
    }
    // а теперь резолвим этот запрос
    //accessToken = await refreshTokenRequest
    const data = await refreshTokenRequest
    accessToken = data.payload
    console.log(accessToken) //
    // и очищаем переменную
    refreshTokenRequest = null
  }
  console.log(accessToken) //
  // возвращаем рабочий accessToken
  return accessToken
}

// обрабатываем запрос перед отправкой
apiClient.interceptors.request.use(async (config) => {
  console.log('проверяю request')
  // если указан флаг skipAuth, пропускаем запрос дальше как есть
  
  if (config.skipAuth) {
    console.log('пропускаю авторизацию')
    return config
  }

  // иначе запрашиваем валидный accessToken
  const accessToken = await requestValidAccessToken()
  console.log('получаю токен', accessToken) //
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
    console.log('проверяю response')
    // если пришла 401, разлогиниваем пользователя
    console.log('status', status)
    if (status === 401) {
      console.log('401 здесь надо разлогиниться', status === 401)
      //разлогиниваем
      
      store.dispatch(revertAll())
    } else if (errors) {
      // показываем ошибки сервера 
      console.log('ошибки', errors)
    }

    return response
  },
  (error) => Promise.reject(error)
)
