import classes from './index.module.css'

import Heading from '../Heading'
import Filter from '../Filter'
import Search from '../Search'
import TrackTable from './TrackTable'

const MainContent = () => {
  return (
    <div className={classes.centerBlock}>
      <Search className={classes.searchBlock} />
      <Heading className={classes.heading} />
      <Filter className={classes.filterBlock} />
      <TrackTable />
    </div>
  )
}

export default MainContent
