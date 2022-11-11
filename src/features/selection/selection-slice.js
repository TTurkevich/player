const { createSlice } = require('@reduxjs/toolkit')
import { revertAll, shuffle } from '../general-action'
import { shuffleList, sortById } from '../helpers'
import { loadSelectionById } from './selection-actions'

const initialState = {
  loading: false,
  error: null,
  success: false,
  currentSelection: [],
}

const selectionSlice = createSlice({
  name: 'selection',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadSelectionById.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
      .addCase(loadSelectionById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || action.meta.error
        state.success = false
      })
      .addCase(loadSelectionById.fulfilled, (state, action) => {
        state.loading = false
        state.currentSelection = action.payload
      })
      //logout
      .addCase(revertAll, () => initialState)
      //shuffle
      .addCase(shuffle, (state) => {
        state.currentSelection = shuffleList(state.currentSelection)
      })
  },
})

export const selectionReducer = selectionSlice.reducer

//selectors
export const selectAllSelections = (state) => state.selection

export const selectCurrentSelection = (state, { search = '', id = '' }) => {
  const selection = state?.selection?.currentSelection.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  )
  return sortById(selection, id)
}
