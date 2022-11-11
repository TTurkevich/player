import { Outlet } from 'react-router-dom'

import classes from './index.module.css'

import Nav from '../../components/Navigation'
import Player from '../../components/Player'
import { useSelector } from 'react-redux'
import { selectPlayerVisibility } from '../../features/player/player-slice'

const Layout = () => {
    const visibility = useSelector(selectPlayerVisibility)

  return (
    <>
      <main className={classes.main}>
        <Nav />
        <Outlet />
      </main>
      {visibility && <Player />}
    </>
  )
}

export default Layout
