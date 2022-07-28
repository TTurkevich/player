import classes from './index.module.css'
import cn  from 'classnames'

const Logo = () => {
  return (
    <div className={cn(classes.nav__logo, classes.logo)}>
      <img
        className={classes.logo__image}
        src={process.env.PUBLIC_URL + '/img/logo.png'}
        alt="logo"
      ></img>
    </div>
  )
}

export default Logo
