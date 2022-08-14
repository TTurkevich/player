import classes from './index.module.css'

import Playlist from '../../Playlist'
import TrackTableHats from '../TrackTableHats'


const TrackTable = () => {
  return (
    <div className={classes.content}>
      <TrackTableHats />
      <Playlist />
    </div>
  )
}

export default TrackTable
