import Logo from '../Logo'
import Burger from './Burger'
import Menu from './Menu'
import classes from './index.module.css'
import { useState } from 'react'

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
