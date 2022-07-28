import classes from './index.module.css'
import cn  from 'classnames'
import Buttons from '../Buttons'
import TrackPlay from '../TrackPlay'


const Controls = () => {
    return (
      <div className={cn(classes.bar__player, classes.player)}>
        <Buttons />
        <TrackPlay />
      </div>
    )
  }
  
  export default Controls