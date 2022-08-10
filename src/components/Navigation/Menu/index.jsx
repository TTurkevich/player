import cn from 'classnames'

import classes from './index.module.css'


const Menu = ({active, setActive}) => {
  return (
    <div className={cn(active ? classes.menuActive : classes.menu)} onClick={() => setActive(false)}>
      <ul className={classes.list} onClick={event => event.stopPropagation()}>
        <li className={classes.item}>
          <a href="http://" className={classes.link}>
            Главное
          </a>
        </li>
        <li className={classes.item}>
          <a href="http://" className={classes.link}>
            Мой плейлист
          </a>
        </li>
        <li className={classes.item}>
          <a href="http://" className={classes.link}>
            Войти
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
