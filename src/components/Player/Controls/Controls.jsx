import classes from './Controls.module.css'
import Buttons from './Buttons/Buttons'
import TrackPlay from './TrackPlay/TrackPlay'


const Player = () => {
    return (
      <div className={`${classes.bar__player} ${classes.player}`}>
        <Buttons />
        <TrackPlay />
      </div>
    )
  }
  
  export default Player