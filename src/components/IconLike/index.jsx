import cn from 'classnames'

import { useTheme } from '../../context/Theme/ThemeProvider'

import Like from '../Icons/Like'

import classes from './index.module.css'

const IconLike = ({ active }) => {
  const { theme } = useTheme()

  return (
    <Like
      className={cn(classes.icon, classes[theme], active ? classes.active : '')}
    />
  )
}

export default IconLike
