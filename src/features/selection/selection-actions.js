const { createAsyncThunk } = require('@reduxjs/toolkit')

export const loadSelectionById = createAsyncThunk(
  'selection/by-id',
  async (id, { extra: { apiClient, api }, rejectWithValue }) => {
    try {
      const { data } = await apiClient.get(api.SELECTION_BY_ID(id))
      return data.items
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)
