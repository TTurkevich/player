import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Toggle from '../Toggle'

import cn from 'classnames'
import classes from './index.module.css'

import { removePlayer } from '../../../features/player/player-slice'
import { revertAll } from '../../../features/general-action'
import { useCleanUp } from '../../../features/controls/use-cleanup'

const Menu = ({ active, setActive }) => {
  const dispatch = useDispatch()
  const cleanUp = useCleanUp()

  const logOut = () => {
    dispatch(revertAll())
  }

  const handleClick = () => {
    dispatch(removePlayer())
    cleanUp()
  }

  return (
    <div
      className={cn(active ? classes.menuActive : classes.menu)}
      onClick={() => setActive(false)}
    >
      <ul className={classes.list}>
        <li className={classes.item} onClick={handleClick}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.activeLink : classes.link
            }
            to="/"
          >
            Главное
          </NavLink>
        </li>
        <li className={classes.item} onClick={handleClick}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.activeLink : classes.link
            }
            to="/favorite"
          >
            Мой плейлист
          </NavLink>
        </li>
        <li className={classes.item} onClick={logOut}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.activeLink : classes.link
            }
            to="/login"
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
