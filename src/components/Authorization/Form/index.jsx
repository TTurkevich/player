import cn from 'classnames'

import classes from './index.module.css'

const Form = ({ themeStyle, onSubmit, children }) => {
  return (
    <div className={cn(classes.container, classes[themeStyle])}>
      <div className={classes.loginBlock}>
        <form className={classes.register} onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  )
}

export default Form
