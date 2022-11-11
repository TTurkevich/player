const { createSlice } = require('@reduxjs/toolkit')
import { revertAll, shuffle } from '../general-action'
import { setAllID, shuffleList, sortById } from '../helpers'
import { loadFavorite } from './favorite-actions'

const initialState = {
  loading: false,
  error: null,
  success: false,
  list: [],
  listAllId: [],
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadFavorite.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
      .addCase(loadFavorite.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || action.meta.error
        state.success = false
      })
      .addCase(loadFavorite.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload
        state.listAllId = setAllID(action.payload)
      })
      //logout
      .addCase(revertAll, () => initialState)
      //shuffle
      .addCase(shuffle, (state) => {
        state.list = shuffleList(state.list)
      })
  },
})

export const favoriteReducer = favoriteSlice.reducer

//selectors
export const selectAllFavorite = (state) => state.favorite
export const selectFavoriteTracks = (state) => state.favorite.list
export const selectFavoriteId = (state) => state.favorite.listAllId

export const selectVisibilityFavorite = (state, { search = '', id = null }) => {
  const playlist = state?.favorite?.list?.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase())
  )
  return sortById(playlist, id)
}
