import cn from 'classnames'

import { useTheme } from '../../../context/Theme/ThemeProvider'

import IconLike from '../../IconLike'
import IconButton from '../../Player/IconButton'

import classes from './index.module.css'

const Time = ({ time, onClick, active }) => {
  const { theme } = useTheme()

  const timeTrack = Math.floor(time / 60) + ': ' + (time % 60)

  return (
    <div className={classes.container}>
      <IconButton Icon={IconLike} onClick={onClick} active={active} />
      <span className={cn(classes.time, classes[theme])}>{`${timeTrack}`}</span>
    </div>
  )
}

export default Time
