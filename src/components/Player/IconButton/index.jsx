import cn from 'classnames'
import classes from './index.module.css'

const IconButton = ({ onChange, iconClassName, buttonClassName, Icon }) => {
  return (
    <button className={cn(buttonClassName, classes.btn)} onClick={onChange}>
      <Icon className={iconClassName} />
    </button>
  )
}

export default IconButton
