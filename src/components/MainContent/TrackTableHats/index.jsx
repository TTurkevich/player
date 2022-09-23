import cn from 'classnames'

import { useTheme } from '../../../context/Theme/ThemeProvider'

import Watch from '../../Icons/Watch'

import classes from './index.module.css'

const TrackTableHats = () => {
  const { theme } = useTheme()
  return (
    <div className={classes.title}>
      <div className={cn(classes.col, classes[`${theme}`])}>Трек</div>
      <div className={cn(classes.col, classes[`${theme}`])}>Иcполнитель</div>
      <div className={cn(classes.col, classes[`${theme}`])}>Альбом</div>
      <div className={cn(classes.col, classes[`${theme}`])}>
        <Watch className={cn(classes.icon, classes[`${theme}`])} />
      </div>
    </div>
  )
}

export default TrackTableHats
