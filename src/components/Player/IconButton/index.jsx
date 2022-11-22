import cn from 'classnames'
import classes from './index.module.css'

const IconButton = ({
  onClick,
  iconClassName,
  buttonClassName,
  Icon,
  active,
  disabled,
}) => {
  return (
    <button
      className={cn(buttonClassName, classes.btn)}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon className={iconClassName} active={active} />
    </button>
  )
}

export default IconButton
