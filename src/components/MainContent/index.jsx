import classes from './index.module.css'

import Heading from '../Heading'
import Filter from '../Filter'
import Search from '../Search'
import TrackTable from './TrackTable'

const MainContent = () => {
  return (
    <>
      <Search className={classes.searchBlock} />
      <Heading className={classes.heading} text="Треки" />
      <Filter className={classes.filterBlock} />
      <TrackTable />
    </>
  )
}

export default MainContent
