import classes from './Burger.module.css'

const Burger = () => {
  return (
    <div className={`${classes.nav__burger} ${classes.burger}`}>
      <span className={classes.burger__line}></span>
      <span className={classes.burger__line}></span>
      <span className={classes.burger__line}></span>
    </div>
  )
}

export default Burger