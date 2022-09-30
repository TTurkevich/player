import cn from 'classnames'

import { useTheme } from '../../../context/Theme/ThemeProvider'

import classes from './index.module.css'

const Burger = ({ active, setActive }) => {
  const { theme } = useTheme()
  return (
    <div className={classes.burger} onClick={() => setActive(!active)}>
      <span className={cn(classes.line, classes[theme])}></span>
      <span className={cn(classes.line, classes[theme])}></span>
      <span className={cn(classes.line, classes[theme])}></span>
    </div>
  )
}

export default Burger
