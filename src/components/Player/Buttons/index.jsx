import cn from 'classnames'

import { useTheme } from '../../../context/Theme/ThemeProvider'

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
  const { theme } = useTheme()
  const repeatClassNames = cn(classes.repeat, {
    [classes.activeRepeat]: activeRepeat,
  })

  return (
    <div className={classes.controls}>
      <IconButton
        buttonClassName={classes.prev}
        Icon={Prev}
        iconClassName={cn(classes.prevIcon, classes[theme])}
        handleClick={onPrevClick}
      />
      <IconButton
        buttonClassName={classes.play}
        Icon={isPlaying ? Pause : Play}
        iconClassName={cn(classes.playIcon, classes[theme])}
        handleClick={() => onPlayPauseClick(isPlaying ? false : true)}
      />
      <IconButton
        buttonClassName={classes.next}
        Icon={Next}
        iconClassName={cn(classes.nextIcon, classes[theme])}
        handleClick={onNextClick}
      />
      <IconButton
        buttonClassName={repeatClassNames}
        Icon={Repeat}
        iconClassName={cn(classes.repeatIcon, classes[theme])}
        handleClick={onRepeatTrack}
      />
      <IconButton
        buttonClassName={classes.shuffle}
        Icon={Shuffle}
        iconClassName={cn(classes.shuffleIcon, classes[theme])}
        handleClick={onShuffleTracks}
      />
    </div>
  )
}

export default Buttons
