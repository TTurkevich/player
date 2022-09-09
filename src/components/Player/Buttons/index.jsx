import cn from 'classnames'
import classes from './index.module.css'

import IconButton from '../IconButton'
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
  const repeatClassNames = cn(classes.repeat, {
    [classes.activeRepeat]: activeRepeat,
  })

  return (
    <div className={classes.controls}>
      <IconButton
        classNameBtn={classes.prev}
        Icon={Prev}
        classNameIcon={classes.prevIcon}
        onChange={onPrevClick}
      />
      <IconButton
        classNameBtn={classes.play}
        Icon={isPlaying ? Pause : Play}
        classNameIcon={classes.playIcon}
        onChange={() => onPlayPauseClick(isPlaying ? false : true)}
      />
      <IconButton
        classNameBtn={classes.next}
        Icon={Next}
        classNameIcon={classes.nextIcon}
        onChange={onNextClick}
      />
      <IconButton
        classNameBtn={repeatClassNames}
        Icon={Repeat}
        classNameIcon={classes.repeatIcon}
        onChange={onRepeatTrack}
      />
      <IconButton
        classNameBtn={classes.shuffle}
        Icon={Shuffle}
        classNameIcon={classes.shuffleIcon}
        onChange={onShuffleTracks}
      />
    </div>
  )
}

export default Buttons
