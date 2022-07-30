import Logo from '../Logo'
import Burger from './Burger'
import Menu from './Menu'
import classes from './index.module.css'

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <Logo />
      <Burger />
      <Menu />
    </nav>
  )
}

export default Nav
