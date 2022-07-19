import classes from './Player.module.css'
import Controls from './Controls/Controls'
import TrackPlay from './TrackPlay/TrackPlay'


const Player = () => {
    return (
      <div className={`${classes.bar__player} ${classes.player}`}>
        <Controls />
        <TrackPlay />
      </div>
    )
  }
  
  export default Player