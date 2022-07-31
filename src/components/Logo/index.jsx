import classes from './index.module.css'

const Logo = () => {
  return (
    <div className={classes.logo}>
      <img className={classes.image} src='/img/logo.png' alt="logo" />
    </div>
  )
}

export default Logo
