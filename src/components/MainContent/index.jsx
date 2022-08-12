import classes from './index.module.css'

import Heading from '../Heading'
import Filter from '../Filter'
import Search from '../Search'
import TrackTable from './TrackTable'

const MainContent = () => {
  return (
    <div className={classes.centerBlock}>
      <Search searchBlock={classes.searchBlock} />
      <Heading heading={classes.heading} />
      <Filter filterBlock={classes.filterBlock} />
      <TrackTable />
    </div>
  )
}

export default MainContent
