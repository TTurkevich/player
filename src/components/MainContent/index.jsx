import Search from '../Search'
import Filter from '../Filter'
import TrackTable from './TrackTable'
import TitleTracks from '../TitleTracks'
import classes from './index.module.css'
import cn from 'classnames'



const MainContent = () => {
  return (
    <div className={cn(classes.main__centerblock, classes.centerblock)}>
      <Search />
      <TitleTracks />
      <Filter />
      <TrackTable />
    </div>
  )
}

export default MainContent
