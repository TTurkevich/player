import cn from 'classnames'
import { NavLink, useNavigate } from 'react-router-dom'
import useAuthContext from '../../../Auth/useAuthContext'

import Toggle from '../Toggle'

import classes from './index.module.css'

const Menu = ({ active, setActive }) => {
  const { logout } = useAuthContext()
  const navigate = useNavigate()

  return (
    <div
      className={cn(active ? classes.menuActive : classes.menu)}
      onClick={() => setActive(false)}
    >
      <ul className={classes.list}>
        <li className={classes.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.activeLink : classes.link
            }
            to="/"
          >
            Главное
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.activeLink : classes.link
            }
            to="/myTracks"
          >
            Мой плейлист
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.activeLink : classes.link
            }
            to="/logIn"
            onClick={() => logout(() => navigate('/', { replace: true }))}
          >
            Выйти
          </NavLink>
        </li>
        <li className={classes.item}>
          <Toggle />
        </li>
      </ul>
    </div>
  )
}

export default Menu
