import classes from './Block.module.css'
import Player from './Player/Player'
import Volume from './Volume/Volume'

const Block = () => {
  return (
    <div className={classes['bar__player-block']}>
      <Player />
      <Volume />
    </div>
  )
}

export default Block
