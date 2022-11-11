const { createAsyncThunk } = require('@reduxjs/toolkit')

export const loadFavorite = createAsyncThunk(
  'favorite',
  async (_, { extra: { apiClient, api }, rejectWithValue }) => {
    try {
      const { data } = await apiClient.get(api.FAVORITE)
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

export const addFavoriteById = createAsyncThunk(
  'favorite/add-track-by-id',
  async (id, { extra: { apiClient, api }, rejectWithValue }) => {
    try {
      const { data } = await apiClient.post(api.searchFavoriteByID(id))
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

export const removeFavoriteById = createAsyncThunk(
  'favorite/remove-track-by-id',
  async (id, { extra: { apiClient, api }, rejectWithValue }) => {
    try {
      const { data } = await apiClient.delete(api.searchFavoriteByID(id))
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
