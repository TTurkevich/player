import Logo from './Logo'
import Burger from './Burger'
import Menu from './Menu'
import classes from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={`${classes.main__nav} ${classes.nav}`}>
      <Logo />
      <Burger />
      <Menu />
    </nav>
  )
}

export default Nav
