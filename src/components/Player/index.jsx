import classes from './index.module.css'
import Controls from './Controls'
import Volume from './Volume'

const Player = () => {
  return (
    <div className={classes.bar}>
      <div className={classes.content}>
        <div className={classes.playerProgress}></div>
        <div className={classes.playerBlock}>
          <Controls />
          <Volume />
        </div>
      </div>
    </div>
  )
}

export default Player
