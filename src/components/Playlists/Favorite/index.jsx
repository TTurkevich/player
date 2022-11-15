import { useSelector } from 'react-redux'

import Heading from '../../Heading'
import Playlist from '../../TrackTable/Playlist'
import SkeletonPlaylist from '../../Skeleton/SkeletonPlaylist'
import Track from '../../Track'
import TrackTable from '../../TrackTable'

import { useInfo } from '../../../features/controls/use-info'
import { selectAllFavorite } from '../../../features/favorite/favorite-slice'

import classes from './index.module.css'

const Favorite = () => {
  const favorite = useInfo()
  const { loading, error } = useSelector(selectAllFavorite)

  return (
    <>
      <Heading className={classes.heading} text="Мои треки" />
      <TrackTable>
        <Playlist>
          {error && <h2>Не получена база треков...</h2>}
          {loading && <SkeletonPlaylist />}
          {loading && favorite.length && <p>У вас еще нет любимых треков</p>}
          {!loading &&
            favorite.length &&
            favorite.map(
              ({ id, name, album, author, duration_in_seconds }, index) => (
                <Track
                  key={index}
                  id={id}
                  title={name}
                  album={album}
                  author={author}
                  time={duration_in_seconds}
                />
              )
            )}
        </Playlist>
      </TrackTable>
    </>
  )
}

export default Favorite
