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
        onChange={onPrevClick}
      />
      <IconButton
        buttonClassName={classes.play}
        Icon={isPlaying ? Pause : Play}
        iconClassName={cn(classes.playIcon, classes[theme])}
        onChange={() => onPlayPauseClick(isPlaying ? false : true)}
      />
      <IconButton
        buttonClassName={classes.next}
        Icon={Next}
        iconClassName={cn(classes.nextIcon, classes[theme])}
        onChange={onNextClick}
      />
      <IconButton
        buttonClassName={repeatClassNames}
        Icon={Repeat}
        iconClassName={cn(classes.repeatIcon, classes[theme])}
        onChange={onRepeatTrack}
      />
      <IconButton
        buttonClassName={classes.shuffle}
        Icon={Shuffle}
        iconClassName={cn(classes.shuffleIcon, classes[theme])}
        onChange={onShuffleTracks}
      />
    </div>
  )
}

export default Buttons
