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

      return await apiClient.post(
        api.USER_SIGNUP,
        { username, email, password },
        config
      )
    } catch (error) {
      if (
        error.response &&
        (error.response.data.email || error.response.data.username)
      ) {
        return rejectWithValue(
          error.response.data.email || error.response.data.username
        )
      } else {
        return rejectWithValue(error.message)
      }
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

      const { data } = await apiClient.post(
        api.USER_LOGIN,
        { email, password },
        config
      )

      return data
    } catch (error) {
      if (error.response && error.response.data.non_field_errors) {
        return rejectWithValue(error.response.data.non_field_errors)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const userToken = createAsyncThunk(
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

      const { data } = await apiClient.post(
        api.USER_TOKEN,
        { email, password },
        config
      )
      return data
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data)
      } else {
        return rejectWithValue(error.message)
      }
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

      console.log(user.userToken.refresh)
      console.log('refresh---')

      const { data } = await apiClient.post(
        api.USER_REFRESH_TOKEN,
        { refresh: user.userToken.refresh },
        config
      )
      console.log(data)
      console.log('refresh++++')
      localStorage.setItem('userToken', data.access)
      console.log('новый токен', data.access)
      return data.access
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)
