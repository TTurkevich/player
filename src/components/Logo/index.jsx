import classes from './index.module.css'

const Logo = () => {
  return (
    <div className={classes.logo}>
      <img
        className={classes.image}
        src={process.env.PUBLIC_URL + '/img/logo.png'}
        alt="logo"
      ></img>
    </div>
  )
}

export default Logo
