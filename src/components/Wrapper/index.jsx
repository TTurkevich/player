import cn from 'classnames'

import classes from './index.module.css'

const Wrapper = ({ children, sidebar, className }) => {
  return (
    <>
      <div className={cn(className, classes.centerBlock)}>{children}</div>
      {sidebar}
    </>
  )
}

export default Wrapper
