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
  return (
    <div className={classes.controls}>
      <div
        className={cn(classes.prev, classes.btn, classes.btnIcon)}
        onClick={onPrevClick}
      >
        <Prev className={classes.prevIcon} />
      </div>
      {isPlaying ? (
        <div
          className={cn(classes.play, classes.btn, classes.btnIcon)}
          onClick={() => onPlayPauseClick(false)}
        >
          <Pause className={classes.playIcon} />
        </div>
      ) : (
        <div
          className={cn(classes.play, classes.btn, classes.btnIcon)}
          onClick={() => onPlayPauseClick(true)}
        >
          <Play className={classes.playIcon} />
        </div>
      )}
      <div
        className={cn(classes.next, classes.btn, classes.btnIcon)}
        onClick={onNextClick}
      >
        <Next className={classes.prevIcon} />
      </div>
      <div
        className={
          activeRepeat
            ? cn(
                classes.activeRepeat,
                classes.repeat,
                classes.btn,
                classes.btnIcon
              )
            : cn(classes.repeat, classes.btn, classes.btnIcon)
        }
        onClick={onRepeatTrack}
      >
        <Repeat className={classes.repeatIcon} />
      </div>
      <div
        className={cn(classes.shuffle, classes.btn, classes.btnIcon)}
        onClick={onShuffleTracks}
      >
        <Shuffle className={classes.shuffleIcon} />
      </div>
    </div>
  )
}

export default Buttons
