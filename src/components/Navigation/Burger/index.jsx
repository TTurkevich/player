import classes from './index.module.css'
import cn  from 'classnames'

const Burger = ({active, setActive}) => {
  return (
    <div className={cn(classes.burger)} onClick={() => setActive(!active)}>
      <span className={classes.line}></span>
      <span className={classes.line}></span>
      <span className={classes.line}></span>
    </div>
  )
}

export default Burger