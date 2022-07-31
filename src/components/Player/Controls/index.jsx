import classes from './index.module.css'
import Buttons from '../Buttons'
import TrackPlay from '../TrackPlay'


const Controls = () => {
    return (
      <div className={classes.player}>
        <Buttons />
        <TrackPlay />
      </div>
    )
  }
  
  export default Controls