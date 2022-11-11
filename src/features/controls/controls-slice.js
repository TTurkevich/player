import { revertAll } from '../general-action'

const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  search: '',
  filterAuthors: {},
  filterGenres: {},
  filterYears: '',
  id: '',
}

const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setFilterAuthors: (state, action) => {
      state.filterAuthors = action.payload
    },
    setFilterGenres: (state, action) => {
      state.filterGenres = action.payload
    },
    setFilterYears: (state, action) => {
      state.filterYears = action.payload
    },
    setId: (state, action) => {
      state.id = action.payload
    },
    clearControls: () => initialState,
  },
  extraReducers: (builder) => builder.addCase(revertAll, () => initialState),
})

export const {
  setSearch,
  setFilterAuthors,
  setFilterGenres,
  setFilterYears,
  clearControls,
  setId,
} = controlsSlice.actions

export const controlsReducer = controlsSlice.reducer

export const selectSearch = (state) => state.controls.search
export const selectFilterAuthors = (state) => state.controls.filterAuthors
export const selectFilterGenres = (state) => state.controls.filterGenres
export const selectFilterYears = (state) => state.controls.filterYears
export const selectCurrentId = (state) => state.controls.id
export const selectControls = (state) => state.controls
