import classes from './Sidebar.module.css'
import Personal from './Personal/Personal'
import Block from './Block/Block'

const Sidebar = () => {
  return (
    <div className={`${classes.main__sidebar} ${classes.sidebar}`}>
      <Personal />
      <Block />
    </div>
  )
}

export default Sidebar
