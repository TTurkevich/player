import classes from './Progress.module.css'

const VolumeProgress = () => {
  return (
    <div className={`${classes['volume__progress']} ${classes['_btn']}`}>
      <input
        className={classes['volume__progress-line _btn']}
        type="range"
        name="range"
      ></input>
    </div>
  )
}

export default VolumeProgress
