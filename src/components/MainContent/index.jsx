import Search from '../Search'
import Filter from '../Filter'
import TrackTable from './TrackTable'
import Heading from '../Heading'
import classes from './index.module.css'

const MainContent = () => {
  return (
    <div className={classes.centerBlock}>
      <Search />
      <Heading />
      <Filter />
      <TrackTable />
    </div>
  )
}

export default MainContent
