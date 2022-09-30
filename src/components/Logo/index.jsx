import cn from 'classnames'
import { useTheme } from '../../context/Theme/ThemeProvider'

import LogoIcon from '../Icons/LogoIcon'

import classes from './index.module.css'

const Logo = ({ className }) => {
  const { theme } = useTheme()
  return (
    <div className={cn(className, classes.logo)}>
      <LogoIcon className={cn(classes.image, classes[theme])} />
    </div>
  )
}

export default Logo
