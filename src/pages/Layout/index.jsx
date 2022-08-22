import { Outlet } from 'react-router-dom'

import classes from './index.module.css'

import Nav from '../../components/Navigation'
import Player from '../../components/Player'

const Layout = () => {
  return (
    <>
      <main className={classes.main}>
        <Nav />
        <Outlet />
      </main>
      <Player />
    </>
  )
}

export default Layout
