import classes from './Player.module.css'
import Controls from './Controls'
import Volume from './Volume'

const Player = () => {
  return (
    <div className={classes.bar}>
      <div className={classes.bar__content}>
        <div className={classes['bar__player-progress']}></div>
        <div className={classes['bar__player-block']}>
          <Controls />
          <Volume />
        </div>
      </div>
    </div>
  )
}

export default Player
