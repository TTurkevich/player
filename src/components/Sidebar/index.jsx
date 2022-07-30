import classes from './index.module.css'
import Personal from './Personal'
import Recommendations from './Recommendations'

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <Personal />
      <Recommendations />
    </div>
  )
}

export default Sidebar
