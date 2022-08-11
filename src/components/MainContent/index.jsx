import classes from './index.module.css'

import Heading from '../Heading'
import Filter from '../Filter'
import Search from '../Search'
import TrackTable from './TrackTable'

const MainContent = () => {
  return (
    <div className={classes.centerBlock}>
      <div className={classes.item}>
        <Search />
      </div>
      <div className={classes.item}>
        <Heading />
      </div>
      <div className={classes.item}>
      <Filter />
      </div>
      <TrackTable />
    </div>
  )
}

export default MainContent
