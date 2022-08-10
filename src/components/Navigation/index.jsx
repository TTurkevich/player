import { useState } from 'react'

import classes from './index.module.css'

import Burger from './Burger'
import Logo from '../Logo'
import Menu from './Menu'



const Nav = () => {
  const [menuActive, setMenuActive] = useState(false)
  return (
    <nav className={classes.nav}>
      <Logo />
      <Burger active={menuActive} setActive={setMenuActive} />
      <Menu active={menuActive} setActive={setMenuActive} />
    </nav>
  )
}

export default Nav
