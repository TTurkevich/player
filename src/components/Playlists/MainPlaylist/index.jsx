import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectTracksInfo } from '../../../features/tracks/tracks-slice'
import { loadTracks } from '../../../features/tracks/tracks-actions'
import { loadFavorite } from '../../../features/favorite/favorite-actions'
import { useInfo } from '../../../features/controls/use-info'

import SkeletonPlaylist from '../../Skeleton/SkeletonPlaylist'
import Track from '../../Track'
import TrackTable from '../../TrackTable'
import Playlist from '../../TrackTable/Playlist'

const MainPlaylist = () => {
  const dispatch = useDispatch()
  const tracks = useInfo()

  const { status, error, qty } = useSelector(selectTracksInfo)

  useEffect(() => {
    if (!qty) {
      dispatch(loadTracks())
      dispatch(loadFavorite())
    }
  }, [qty, dispatch])

  return (
    <>
      <TrackTable>
        <Playlist>
          {error && <h2>Не получена база треков...</h2>}
          {status === 'loading' && <SkeletonPlaylist />}
          {status === 'received' &&
            tracks.map((track, index) => (
              <Track
                key={index}
                id={track.id}
                title={track.name}
                album={track.album}
                author={track.author}
                time={track.duration_in_seconds}
              />
            ))}
        </Playlist>
      </TrackTable>
    </>
  )
}

export default MainPlaylist
