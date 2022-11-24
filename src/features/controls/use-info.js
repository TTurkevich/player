import { useSelector } from 'react-redux'

import { selectVisibilityFavorite } from '../favorite/favorite-slice'
import { selectCurrentSelection } from '../selection/selection-slice'
import { selectVisibleTracks } from '../tracks/tracks-slice'

export const useInfo = () => {
  const route = document.location.pathname

  const playlist = getActualPlaylist(route)
  return playlist
}

const getActualPlaylist = (route) => {
  if (route === '/') {
    const tracks = useSelector(selectVisibleTracks)
    return tracks
  }
  if (route.includes('/selections/')) {
    return useSelector(selectCurrentSelection)
  }
  if (route.includes('/favorite')) {
    const tracks = useSelector(selectVisibilityFavorite)
    return tracks
  }
}
