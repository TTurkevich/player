import cn from 'classnames'

import { useTheme } from '../../context/Theme/ThemeProvider'

import DisLike from '../Icons/Dislike'

import classes from './index.module.css'

const IconDisLike = () => {
  const { theme } = useTheme()

  return <DisLike className={cn(classes.icon, classes[theme])} />
}

export default IconDisLike
