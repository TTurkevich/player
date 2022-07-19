import Search from './Search/Search'
import Filter from './Filter/Filter'
import Content from './Content/Content'
import classes from './Centerblock.module.css'

const Centerblock = () => {
  return (
    <div className={`${classes.main__centerblock} ${classes.centerblock}`}>
      <Search />
      <h2 className={classes.centerblock__h2}>Треки</h2>
      <Filter />
      <Content />
    </div>
  )
}

export default Centerblock
