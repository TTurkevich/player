import classes from './index.module.css'
import cn  from 'classnames'

const VolumeProgress = () => {
  return (
    <div className={cn(classes.progress, classes.btn)}>
      <input
        className={cn(classes.line, classes.btn)}
        type="range"
        name="range"
      ></input>
    </div>
  )
}

export default VolumeProgress
