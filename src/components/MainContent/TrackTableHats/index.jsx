import classes from './index.module.css'
import Watch from '../../Svg/Watch'

const TrackTableHats = () => {
  return (
    <div className={classes.title}>
      <div className={classes.col}>Трек</div>
      <div className={classes.col}>Иcполнители</div>
      <div className={classes.col}>Альбом</div>
      <div className={classes.col}>
        <Watch className={classes.icon} />
      </div>
    </div>
  )
}

export default TrackTableHats
