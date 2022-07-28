import classes from './index.module.css'
import cn  from 'classnames'
import Personal from './Personal'
import Recommendations from './Recommendations'

const Sidebar = () => {
  return (
    <div className={cn(classes.main__sidebar, classes.sidebar)}>
      <Personal />
      <Recommendations />
    </div>
  )
}

export default Sidebar
