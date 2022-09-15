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
        buttonClassName={classes.prev}
        Icon={Prev}
        iconClassName={classes.prevIcon}
        onChange={onPrevClick}
      />
      <IconButton
        buttonClassName={classes.play}
        Icon={isPlaying ? Pause : Play}
        iconClassName={classes.playIcon}
        onChange={() => onPlayPauseClick(isPlaying ? false : true)}
      />
      <IconButton
        buttonClassName={classes.next}
        Icon={Next}
        iconClassName={classes.nextIcon}
        onChange={onNextClick}
      />
      <IconButton
        buttonClassName={repeatClassNames}
        Icon={Repeat}
        iconClassName={classes.repeatIcon}
        onChange={onRepeatTrack}
      />
      <IconButton
        buttonClassName={classes.shuffle}
        Icon={Shuffle}
        iconClassName={classes.shuffleIcon}
        onChange={onShuffleTracks}
      />
    </div>
  )
}

export default Buttons
