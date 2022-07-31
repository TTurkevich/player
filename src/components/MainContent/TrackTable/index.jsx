import classes from './index.module.css'
import TrackTableHats from '../TrackTableHats'
import Playlist from '../../Playlist'

const TrackTable = () => {
  return (
    <div className={classes.content}>
      <TrackTableHats />
      <Playlist />
    </div>
  )
}

export default TrackTable
