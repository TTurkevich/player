import { useSelector } from 'react-redux'

import Heading from '../../Heading'
import SkeletonPlaylist from '../../Skeleton/SkeletonPlaylist'
import Track from '../../Track'
import TrackTable from '../../TrackTable'
import Playlist from '../../TrackTable/Playlist'

import classes from './index.module.css'

import { selectAllSelections } from '../../../features/selection/selection-slice'
import { useInfo } from '../../../features/controls/use-info'

const Selection = ({ name }) => {
  const selection = useInfo()
  const { loading, error } = useSelector(selectAllSelections)

  return (
    <>
      <Heading className={classes.heading} text={name} />
      <TrackTable>
        <Playlist>
          {error && <h2>Не получена база треков...</h2>}
          {loading && <SkeletonPlaylist />}
          {!loading &&
            selection.map((track, index) => (
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

export default Selection
