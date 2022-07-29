import classes from './index.module.css'
import cn  from 'classnames'

const Burger = () => {
  return (
    <div className={cn(classes.burger, classes.burger)}>
      <span className={classes.line}></span>
      <span className={classes.line}></span>
      <span className={classes.line}></span>
    </div>
  )
}

export default Burger