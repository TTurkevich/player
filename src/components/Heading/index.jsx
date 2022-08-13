import cn from 'classnames'
import classes from './index.module.css'

const Heading = ({className}) => {
  return <h1 className={cn(classes.heading, className)}>Треки</h1>
}

export default Heading
