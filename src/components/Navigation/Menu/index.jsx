import classes from './index.module.css'

const Menu = () => {
  return (
    <div className={classes.menu}>
      <ul className={classes.list}>
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
