import classes from './index.module.css'
import cn  from 'classnames'

const VolumeProgress = () => {
  return (
    <div className={cn(classes['volume__progress'], classes['_btn'])}>
      <input
        className={cn(classes['line'], classes['_btn'])}
        type="range"
        name="range"
      ></input>
    </div>
  )
}

export default VolumeProgress
