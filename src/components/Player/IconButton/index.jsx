import cn from 'classnames'
import classes from './index.module.css'

const IconButton = ({ onChange, classNameBtn, Icon, classNameIcon }) => {
  return (
    <button
      className={cn(classNameBtn, cn(classes.btn, classes.btnIcon))}
      onClick={onChange}
    >
      <Icon className={classNameIcon} />
    </button>
  )
}

export default IconButton
