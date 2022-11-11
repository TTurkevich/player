import { useSelector } from 'react-redux'

import { selectControls } from '../controls/controls-slice'
import { selectVisibilityFavorite } from '../favorite/favorite-slice'
import { selectCurrentSelection } from '../selection/selection-slice'
import { selectVisibleTracks } from '../tracks/tracks-slice'

export const useInfo = () => {
  const route = document.location.pathname

  const { search, filterAuthors, filterGenres, filterYears, id } =
    useSelector(selectControls)

  const playlist = getActualPlaylist(
    search,
    filterAuthors,
    filterGenres,
    filterYears,
    route,
    id
  )

  return playlist
}

const getActualPlaylist = (
  search,
  filterAuthors,
  filterGenres,
  filterYears,
  route,
  id
) => {
  if (route === '/') {
    const tracks = useSelector((state) =>
      selectVisibleTracks(state, {
        search,
        filterAuthors,
        filterGenres,
        filterYears,
        id,
      })
    )

    return tracks
  }
  if (route.includes('/selections/')) {
    const tracks = useSelector((state) =>
      selectCurrentSelection(state, { search, id })
    )

    return tracks
  }
  if (route.includes('/favorite')) {
    const tracks = useSelector((state) =>
      selectVisibilityFavorite(state, { search, id })
    )

    return tracks
  }
}
