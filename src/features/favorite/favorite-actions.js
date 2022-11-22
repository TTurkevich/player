import { createAsyncThunk } from '@reduxjs/toolkit'

export const loadFavorite = createAsyncThunk(
  'favorite',
  async (_, { extra: { apiClient, api }, rejectWithValue }) => {
    try {
      const response = await apiClient.get(api.FAVORITE)
      if (response.statusText !== 'OK') {
        throw new Error('Что-то пошло не так')
      }
      const { data } = await response
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const loadTrackById = createAsyncThunk(
  'tracks/add-track-by-id',
  async (id, { extra: { apiClient, api }, rejectWithValue }) => {
    try {
      const response = await apiClient.get(api.searchTrackByID(id))
      if (response.statusText !== 'OK') {
        throw new Error('Что-то пошло не так')
      }
      const { data } = await response

      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const addFavoriteById = createAsyncThunk(
  'favorite/add-track-by-id',
  async (id, { extra: { apiClient, api }, rejectWithValue }) => {
    try {
      const response = await apiClient.post(api.searchFavoriteByID(id))
      if (response.statusText !== 'OK') {
        throw new Error('Что-то пошло не так, видимо трек уже в избранном')
      }
      const { data } = await response
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const removeFavoriteById = createAsyncThunk(
  'favorite/remove-track-by-id',
  async (id, { extra: { apiClient, api }, rejectWithValue }) => {
    try {
      const response = await apiClient.delete(api.searchFavoriteByID(id))
      if (response.statusText !== 'OK') {
        throw new Error('Что-то пошло не так')
      }

      const { data } = await response
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)


