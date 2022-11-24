import classes from './index.module.css'

import FilterGroup from '../../features/controls/FilterGroup'
import Heading from '../Heading'
import PlaylistMain from '../Playlists/MainPlaylist'
import Search from '../../features/controls/Search'

const MainContent = () => {
  return (
    <>
      <Search className={classes.searchBlock} />
      <Heading className={classes.heading} text="Треки" />
      <FilterGroup className={classes.filterBlock} />
      <PlaylistMain />
    </>
  )
}

export default MainContent
