import { createAsyncThunk } from '@reduxjs/toolkit'

export const userRegister = createAsyncThunk(
  'user/register',
  async (
    { username, email, password },
    { extra: { apiClient, api }, rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        skipAuth: true,
      }
      const response = await apiClient.post(
        api.USER_SIGNUP,
        { username, email, password },
        config
      )
      if (response.status !== 201) {
        const { data } = response
        const { username, email } = data

        if (!username) {
          throw new Error(email[0])
        }
        if (!email) {
          throw new Error(username[0])
        } else {
          throw new Error('Пользователь с такими данными уже существует')
        }
      }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const userLogin = createAsyncThunk(
  'user/login',
  async (
    { email, password },
    { extra: { apiClient, api }, rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        skipAuth: true,
      }

      const response = await apiClient.post(
        api.USER_LOGIN,
        { email, password },
        config
      )
      if (response.statusText !== 'OK') {
        const { data } = response
        const { detail } = data

        throw new Error(detail)
      }
      const { data } = await response

      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const userTokens = createAsyncThunk(
  'user/token',
  async (
    { email, password },
    { extra: { apiClient, api }, rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        skipAuth: true,
      }
      const response = await apiClient.post(
        api.USER_TOKEN,
        { email, password },
        config
      )
      if (response.statusText !== 'OK') {
        throw new Error('Что-то пошло не так, токены авторизации не получены')
      }
      const { data } = await response
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const refreshToken = createAsyncThunk(
  'user/refresh-token',
  async (_, { extra: { apiClient, api }, getState, rejectWithValue }) => {
    try {
      const { user } = getState()
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        skipAuth: true,
      }

      const response = await apiClient.post(
        api.USER_REFRESH_TOKEN,
        { refresh: user.userToken.refresh },
        config
      )
      if (response.statusText !== 'OK') {
        throw new Error('Что-то пошло не так, токены авторизации не получены')
      }
      const { data } = await response
      return data.access
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
