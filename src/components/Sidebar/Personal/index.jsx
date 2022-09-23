import cn from 'classnames'

import { useTheme } from '../../../context/Theme/ThemeProvider'

import classes from './index.module.css'

const Personal = () => {
  const { theme } = useTheme()
  return (
    <div className={classes.personal}>
      <p className={classes.name}>Sergey.Ivanov</p>
      <div className={cn(classes.avatar, classes[`${theme}`])}></div>
    </div>
  )
}

export default Personal
