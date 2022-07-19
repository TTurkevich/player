import classes from './Block.module.css'
import List from './List/List'

const Block = () => {
  return (
    <div className={classes.sidebar__block}>
      <List />
    </div>
  )
}

export default Block
