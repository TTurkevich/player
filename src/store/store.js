import { configureStore } from '@reduxjs/toolkit'

import * as api from '../http/config'
import { apiClient } from '../http/http'
import { controlsReducer } from '../features/controls/controls-slice'
import { tracksReducer } from '../features/tracks/tracks-slice'
import { userReducer } from '../features/user/user-slice'
import { selectionReducer } from '../features/selection/selection-slice'
import { playerReducer } from '../features/player/player-slice'
import { favoriteReducer } from '../features/favorite/favorite-slice'

export const store = configureStore({
  reducer: {
    controls: controlsReducer,
    tracks: tracksReducer,
    user: userReducer,
    selection: selectionReducer,
    player: playerReducer,
    favorite: favoriteReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          apiClient,
          api,
        },
      },
      serializableCheck: false,
    }),
})
