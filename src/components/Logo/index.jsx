import cn from 'classnames'

import { useTheme } from '../../context/Theme/ThemeProvider'
import { useCleanUp } from '../../features/controls/use-cleanup'

import LogoIcon from '../Icons/LogoIcon'

import classes from './index.module.css'

const Logo = ({ className }) => {
  const { theme } = useTheme()
  const cleanUp = useCleanUp()

  return (
    <div className={cn(className, classes.logo)}>
      <a href="" onClick={cleanUp}>
        {' '}
        <LogoIcon className={cn(classes.image, classes[theme])} />
      </a>
    </div>
  )
}

export default Logo
