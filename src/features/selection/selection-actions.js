import { createAsyncThunk } from '@reduxjs/toolkit'

export const loadSelectionById = createAsyncThunk(
  'selection/by-id',
  async (id, { extra: { apiClient, api }, rejectWithValue }) => {
    try {
      const response = await apiClient.get(api.SELECTION_BY_ID(id))
      if (response.statusText !== 'OK') {
        throw new Error('Что-то пошло не так')
      }
      const { data } = await response
      return data.items
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
