import classes from './TrackPlay.module.css'
import Contain from './Contain/Contain'
import LikeDis from './LikeDis/LikeDis'

const TrackPlay = () => {
  return (
    <div className={classes['track-play__contain']}>
      <Contain />
      <LikeDis />
    </div>
  )
}

export default TrackPlay
