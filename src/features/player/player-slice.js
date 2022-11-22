import { createSlice } from '@reduxjs/toolkit'
import { revertAll } from '../general-action'

const initialState = {
  visibility: false,
  currentTrack: null,
  isPlaying: false,
  trackIndex: 0,
  repeat: false,
  sort: false,
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeVisibilityPlayer: (state) => {
      state.visibility = true
    },
    removePlayer: () => initialState,
    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload
    },
    setTrackIndex: (state, action) => {
      state.trackIndex = action.payload
    },
    setRepeat: (state, action) => {
      state.repeat = action.payload
    },
    setSort: (state) => {
      state.sort = !state.sort
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload
    },
  },
  extraReducers: (builder) => builder.addCase(revertAll, () => initialState),
})

export const playerReducer = playerSlice.reducer
export const {
  changeVisibilityPlayer,
  removePlayer,
  setCurrentTrack,
  setTrackIndex,
  setRepeat,
  setIsPlaying,
  setSort,
} = playerSlice.actions

//selectors
export const selectPlayer = (state) => state.player
export const selectPlayerVisibility = (state) => state.player.visibility
