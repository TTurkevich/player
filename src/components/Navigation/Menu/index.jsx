import classes from './index.module.css'
import cn  from 'classnames'

const Menu = () => {
  return (
    <div className={cn(classes.nav__menu, classes.menu)}>
      <ul className={classes.menu__list}>
        <li className={classes.menu__item}>
          <a href="http://" className={classes.menu__link}>
            Главное
          </a>
        </li>
        <li className={classes.menu__item}>
          <a href="http://" className={classes.menu__link}>
            Мой плейлист
          </a>
        </li>
        <li className={classes.menu__item}>
          <a href="http://" className={classes.menu__link}>
            Войти
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
