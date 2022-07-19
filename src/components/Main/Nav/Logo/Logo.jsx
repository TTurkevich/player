import classes from './Logo.module.css'

const Logo = () => {
  return (
    <div className={`${classes.nav__logo} ${classes.logo}`}>
      <img
        className={classes.logo__image}
        src={process.env.PUBLIC_URL + '/img/logo.png'}
        alt="logo"
      ></img>
    </div>
  )
}

export default Logo
