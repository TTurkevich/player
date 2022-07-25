import classes from './Sidebar.module.css'
import Personal from './Personal'
import Recommendations from './Recommendations'

const Sidebar = () => {
  return (
    <div className={`${classes.main__sidebar} ${classes.sidebar}`}>
      <Personal />
      <Recommendations />
    </div>
  )
}

export default Sidebar