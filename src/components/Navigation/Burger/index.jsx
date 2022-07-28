import classes from './index.module.css'
import cn  from 'classnames'

const Burger = () => {
  return (
    <div className={cn(classes.nav__burger, classes.burger)}>
      <span className={classes.burger__line}></span>
      <span className={classes.burger__line}></span>
      <span className={classes.burger__line}></span>
    </div>
  )
}

export default Burger