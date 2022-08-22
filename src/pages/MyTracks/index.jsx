import classes from './index.module.css'

import Heading from '../../components/Heading'
import Search from '../../components/Search'
import TrackTable from '../../components/MainContent/TrackTable'
import Wrapper from '../../components/Wrapper'

const MyTracks = () => {
  return (
    <Wrapper className={classes.wrapper}>
      {
        <>
          <Search className={classes.searchBlock} />
          <Heading className={classes.heading} text="Мои треки" />
          <TrackTable />
        </>
      }
    </Wrapper>
  )
}

export default MyTracks
