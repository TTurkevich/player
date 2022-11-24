import { createAsyncThunk } from '@reduxjs/toolkit'

export const loadTracks = createAsyncThunk(
  'track/all',
  async (_, { extra: { apiClient, api }, rejectWithValue }) => {
    try {
      const response = await apiClient.get(api.ALL_TRACKS)
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
