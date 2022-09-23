import cn from 'classnames'

import { useTheme } from '../../../context/Theme/ThemeProvider'

import classes from './index.module.css'

const Album = ({ title }) => {
  const { theme } = useTheme()
  return (
    <div className={classes.album}>
      <a className={cn(classes.albumLink, classes[`${theme}`])} href="#">
        {title}
      </a>
    </div>
  )
}

export default Album
