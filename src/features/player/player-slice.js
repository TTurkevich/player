import { revertAll } from '../general-action'

const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  visibility: false,
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeVisibilityPlayer: (state) => {
      state.visibility = true
    },
    removePlayer: (state) => {
      state.visibility = false
    },
  },
  extraReducers: (builder) => builder.addCase(revertAll, () => initialState),
})

export const playerReducer = playerSlice.reducer
export const { changeVisibilityPlayer, removePlayer } = playerSlice.actions

//selectors
export const selectPlayer = (state) => state.player
export const selectPlayerVisibility = (state) => state.player.visibility
