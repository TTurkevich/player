import cn from 'classnames'
import classes from './index.module.css'

import Prev from '../../Icons/Prev'
import Play from '../../Icons/Play'
import Pause from '../../Icons/Pause'
import Next from '../../Icons/Next'
import Repeat from '../../Icons/Repeat'
import Shuffle from '../../Icons/Shuffle'

const Buttons = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
  onRepeatTrack,
  activeRepeat,
  onShuffleTracks,
}) => {
  const repeatClassNames = cn({
    [classes.repeat]: true,
    [classes.btn]: true,
    [classes.btnIcon]: true,
    [classes.activeRepeat]: activeRepeat,
  })

  return (
    <div className={classes.controls}>
      <button
        className={cn(classes.prev, classes.btn, classes.btnIcon)}
        onClick={onPrevClick}
      >
        <Prev className={classes.prevIcon} />
      </button>
      {isPlaying ? (
        <button
          className={cn(classes.play, classes.btn, classes.btnIcon)}
          onClick={() => onPlayPauseClick(false)}
        >
          <Pause className={classes.playIcon} />
        </button>
      ) : (
        <button
          className={cn(classes.play, classes.btn, classes.btnIcon)}
          onClick={() => onPlayPauseClick(true)}
        >
          <Play className={classes.playIcon} />
        </button>
      )}
      <button
        className={cn(classes.next, classes.btn, classes.btnIcon)}
        onClick={onNextClick}
      >
        <Next className={classes.prevIcon} />
      </button>
      <button className={repeatClassNames} onClick={onRepeatTrack}>
        <Repeat className={classes.repeatIcon} />
      </button>
      <button
        className={cn(classes.shuffle, classes.btn, classes.btnIcon)}
        onClick={onShuffleTracks}
      >
        <Shuffle className={classes.shuffleIcon} />
      </button>
    </div>
  )
}

export default Buttons
