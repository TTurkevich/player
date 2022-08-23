import cn from 'classnames'
import classes from './index.module.css'

const Heading = ({ className, text }) => {
  return <h1 className={cn(classes.heading, className)}>{text}</h1>
}

export default Heading
