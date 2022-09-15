import cn from 'classnames'
import classes from './index.module.css'

const IconButton = ({ onChange, buttonClassName, Icon, iconClassName }) => {
  return (
    <button
      className={cn(buttonClassName, cn(classes.btn, classes.btnIcon))}
      onClick={onChange}
    >
      <Icon className={iconClassName} />
    </button>
  )
}

export default IconButton
