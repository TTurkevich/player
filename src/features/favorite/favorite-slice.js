import { createSelector, createSlice } from '@reduxjs/toolkit'
import { selectCurrentId, selectSearch } from '../controls/controls-slice'
import { revertAll, shuffle } from '../general-action'
import { shuffleList, sortById } from '../helpers'
import { loadFavorite, loadTrackById } from './favorite-actions'

const initialState = {
  loading: false,
  error: null,
  success: false,
  list: [],
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    deleteTrackById(state, action) {
      state.list = state.list.filter((item) => item.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadFavorite.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
      .addCase(loadFavorite.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.success = false
      })
      .addCase(loadFavorite.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload
      })
      //addTrack
      .addCase(loadTrackById.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
      .addCase(loadTrackById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.success = false
      })
      .addCase(loadTrackById.fulfilled, (state, action) => {
        state.loading = false
        state.list.push(action.payload)
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
export const { deleteTrackById } = favoriteSlice.actions

//selectors
export const selectAllFavorite = (state) => state.favorite
export const selectFavoriteTracks = (state) => state.favorite.list

export const selectVisibilityFavorite = createSelector(
  [selectSearch, selectFavoriteTracks, selectCurrentId],
  (search, favoriteTracks, id) => {
    const playlist = favoriteTracks?.filter((f) =>
      f.name.toLowerCase().includes(search.toLowerCase())
    )
    return sortById(playlist, id)
  }
)
