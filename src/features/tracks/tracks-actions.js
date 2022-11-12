import { createAsyncThunk } from '@reduxjs/toolkit'

export const loadTracks = createAsyncThunk(
  'track/all',
  async (_, { extra: { apiClient, api }, rejectWithValue }) => {
    try {
      const data = await apiClient.get(api.ALL_TRACKS)
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
