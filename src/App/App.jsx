import classes from './App.module.css'

import MainContent from '../components/MainContent'
import Nav from '../components/Navigation'
import Player from '../components/Player'
import Sidebar from '../components/Sidebar'


function App() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <main className={classes.main}>
          <Nav />
          <MainContent />
          <Sidebar />
        </main>
        <Player />
      </div>
    </div>
  )
}

export default App
