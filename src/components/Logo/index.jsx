import cn from 'classnames'
import classes from './index.module.css'

const Logo = ({ src, className }) => {
  return (
    <div className={cn(className, classes.logo)}>
      <img className={classes.image} src={src} alt="logo" />
    </div>
  )
}

export default Logo
