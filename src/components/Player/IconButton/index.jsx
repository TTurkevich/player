import cn from 'classnames'
import classes from './index.module.css'

const IconButton = ({
  handleClick,
  iconClassName,
  buttonClassName,
  Icon,
  active,
}) => {
  return (
    <button className={cn(buttonClassName, classes.btn)} onClick={handleClick}>
      <Icon className={iconClassName} active={active} />
    </button>
  )
}

export default IconButton
