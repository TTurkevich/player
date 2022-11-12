import { createSlice } from '@reduxjs/toolkit'
import { KJUR } from 'jsrsasign'
import { revertAll } from '../general-action'
import {
  userLogin,
  userRegister,
  userToken,
  refreshToken,
} from './user-actions'

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
  userTokenExpires: {
    accessTokenExpires: 0,
    refreshTokenExpires: 0,
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      //login user
      .addCase(userLogin.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || action.meta.error
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false
        state.userInfo = action.payload
      })

      // register user
      .addCase(userRegister.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || action.meta.error
      })
      .addCase(userRegister.fulfilled, (state) => {
        state.loading = false
        state.success = true
      })
      //tokens
      .addCase(userToken.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(userToken.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || action.meta.error
      })
      .addCase(userToken.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.userToken = action.payload
        // дехешируем токены, достаем дату истечения
        const {
          payloadObj: { exp: accessTokenExpires },
        } = KJUR.jws.JWS.parse(action.payload.access)

        const {
          payloadObj: { exp: refreshTokenExpires },
        } = KJUR.jws.JWS.parse(action.payload.refresh)

        // обновляем состояние
        state.userTokenExpires = {
          accessTokenExpires,
          refreshTokenExpires,
        }
      })
      //refresh
      .addCase(refreshToken.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || action.meta.error
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.userToken.access = action.payload
      })
      .addCase(revertAll, () => initialState)
  },
})

export const { clearError } = userSlice.actions
export const userReducer = userSlice.reducer

//selectors
export const selectUser = (state) => state.user
