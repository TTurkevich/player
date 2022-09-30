import { useState } from 'react'
import cn from 'classnames'

import { useTheme } from '../../context/Theme/ThemeProvider'

import classes from './index.module.css'

import Burger from './Burger'
import Logo from '../Logo'
import Menu from './Menu'

const Nav = () => {
  const { theme } = useTheme()
  const [menuActive, setMenuActive] = useState(false)

  return (
    <nav className={cn(classes.nav, classes[theme])}>
      <Logo className={classes.logo} />
      <Burger active={menuActive} setActive={setMenuActive} />
      <Menu active={menuActive} setActive={setMenuActive} />
    </nav>
  )
}

export default Nav
