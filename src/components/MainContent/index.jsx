import Search from './Search'
import Filter from './Filter'
import Content from './Content'
import classes from './MainContent.module.css'

const MainContent = () => {
  return (
    <div className={`${classes.main__centerblock} ${classes.centerblock}`}>
      <Search />
      <h2 className={classes.centerblock__h2}>Треки</h2>
      <Filter />
      <Content />
    </div>
  )
}

export default MainContent
