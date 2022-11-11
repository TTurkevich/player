import { revertAll, shuffle } from '../general-action'
import { shuffleList, sortById, sortYear } from '../helpers'
import { loadTracks } from './tracks-actions'
const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  status: 'idle',
  error: null,
  list: [],
}

const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadTracks.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loadTracks.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.payload || action.meta.error
      })
      .addCase(loadTracks.fulfilled, (state, action) => {
        state.status = 'received'
        state.list = action.payload.data
      })
      //logout
      .addCase(revertAll, () => initialState)
      //shuffle
      .addCase(shuffle, (state) => {
        state.list = shuffleList(state.list)
      })
  },
})

export const tracksReducer = tracksSlice.reducer

//selectors

export const selectTracksInfo = (state) => ({
  status: state.tracks.status,
  error: state.tracks.error,
  qty: state.tracks.list.length,
})

export const selectAllTracks = (state) => state.tracks.list

export const selectVisibleTracks = (
  state,
  {
    search = '',
    filterAuthors = {},
    filterGenres = {},
    filterYears = '',
    id = '',
  }
) => {
  const filtersAuthors = Object.entries(filterAuthors)
  const filtersGenres = Object.entries(filterGenres)

  const tracks = state.tracks.list

    ?.filter(
      (track) =>
        filtersAuthors.every(([key, values]) => values.includes(track[key])) &&
        filtersGenres.every(([key, values]) => values.includes(track[key])) &&
        track.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort(sortYear(filterYears))

  return sortById(tracks, id)
}
