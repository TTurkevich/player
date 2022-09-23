import cn from 'classnames'
import { useTheme } from '../../../context/Theme/ThemeProvider'

import classes from './index.module.css'

const Toggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <button
        onClick={toggleTheme}
        className={cn(classes.button, classes[`${theme}`])}
      ></button>
    </>
  )
}

export default Toggle
