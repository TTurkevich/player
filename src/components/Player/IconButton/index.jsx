import cn from 'classnames'
import classes from './index.module.css'

const IconButton = ({
  onClick,
  iconClassName,
  buttonClassName,
  Icon,
  active,
}) => {
  return (
    <button className={cn(buttonClassName, classes.btn)} onClick={onClick}>
      <Icon className={iconClassName} active={active} />
    </button>
  )
}

export default IconButton
