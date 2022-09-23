import cn from 'classnames'

import { useTheme } from '../../../context/Theme/ThemeProvider'

import IconLike from '../../IconLike'
import IconButton from '../../Player/IconButton'

import classes from './index.module.css'

const Time = ({ time }) => {
  const { theme } = useTheme()
  return (
    <div className={classes.container}>
      <IconButton Icon={IconLike} />
      <span className={cn(classes.time, classes[`${theme}`])}>{time}</span>
    </div>
  )
}

export default Time
