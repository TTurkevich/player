import cn from 'classnames'
import classes from './index.module.css'

const Heading = ({heading}) => {
  return <h1 className={cn(classes.heading, heading)}>Треки</h1>
}

export default Heading
