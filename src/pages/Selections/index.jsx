import classes from './index.module.css'

import Heading from '../../components/Heading'
import Search from '../../components/Search'
import TrackTable from '../../components/MainContent/TrackTable'
import Wrapper from '../../components/Wrapper'

const Selections = () => {
  return (
    <Wrapper className={classes.wrapper}>
      {
        <>
          <Search className={classes.searchBlock} />
          <Heading className={classes.heading} text="Плейлист дня" />
          <TrackTable />
        </>
      }
    </Wrapper>
  )
}

export default Selections
