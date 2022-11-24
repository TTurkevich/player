import cn from 'classnames'
import classes from './index.module.css'

const ListGroup = ({ children, className, ...attrs }) => {
  const styles = cn(classes.listGroup, className)

  return (
    <ul className={styles} {...attrs}>
      {children}
    </ul>
  )
}

export default ListGroup
