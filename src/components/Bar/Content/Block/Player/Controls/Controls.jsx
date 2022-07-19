import classes from './Controls.module.css'
import Prev from './Prev/Prev'
import Play from './Play/Play'
import Next from './Next/Next'
import Repeat from './Repeat/Repeat'
import Shuffle from './Shuffle/Shuffle'

const Controls = () => {
  return (
    <div className={classes.player__controls}>
      <Prev />
      <Play />
      <Next />
      <Repeat />
      <Shuffle />
    </div>
  )
}

export default Controls
