import Logo from '../Logo'
import Burger from './Burger'
import Menu from './Menu'
import classes from './index.module.css'
import cn  from 'classnames'

const Nav = () => {
  return (
    <nav className={cn(classes.main__nav, classes.nav)}>
      <Logo />
      <Burger />
      <Menu />
    </nav>
  )
}

export default Nav
