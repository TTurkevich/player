import cn from 'classnames'

import classes from './index.module.css'

const Button = ({ id, type, disabled, className, children, ...other }) => {
  return (
    <button
      id={id}
      type={type}
      disabled={disabled}
      className={cn(classes.btn, className)}
      {...other}
    >
      {children}
    </button>
  )
}

export default Button
