import classes from './index.module.css'

import Search from '../../features/controls/Search'

import Wrapper from '../../components/Wrapper'

import { useParams } from 'react-router-dom'
import Selection from '../../components/Playlists/Selection'

const Selections = () => {
  const { name } = useParams()

  return (
    <Wrapper className={classes.wrapper}>
      <>
        <Search className={classes.searchBlock} />
        <Selection name={name} />
      </>
    </Wrapper>
  )
}

export default Selections
