import classes from './index.module.css'
import Title from '../Title'
import Playlist from '../../Playlist'

const TrackBlock = () => {
  return (
    <div className={classes.centerblock__content}>
      <Title />
      <Playlist />
    </div>
  )
}

export default TrackBlock
