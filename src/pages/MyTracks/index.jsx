import classes from './index.module.css'

import Search from '../../features/controls/Search'
import Wrapper from '../../components/Wrapper'
import Favorite from '../../components/Playlists/Favorite'

const MyTracks = () => {
  return (
    <Wrapper className={classes.wrapper}>
      {
        <>
          <Search className={classes.searchBlock} />
          <Favorite />
        </>
      }
    </Wrapper>
  )
}

export default MyTracks
