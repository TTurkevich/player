import Search from '../Search'
import Filter from '../Filter'
import TrackBlock from './TrackBlock'
import classes from './index.module.css'
import cn  from 'classnames'

const MainContent = () => {
  return (
    <div className={cn(classes.main__centerblock, classes.centerblock)}>
      <Search />
      <h2 className={classes.centerblock__h2}>Треки</h2>
      <Filter />
      <TrackBlock />
    </div>
  )
}

export default MainContent
