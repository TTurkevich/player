import classes from './Controls.module.css'
import Buttons from '../Buttons'
import TrackPlay from '../TrackPlay'


const Controls = () => {
    return (
      <div className={`${classes.bar__player} ${classes.player}`}>
        <Buttons />
        <TrackPlay />
      </div>
    )
  }
  
  export default Controls