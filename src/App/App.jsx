import classes from './App.module.css'
import Nav from '../components/Navigation'
import MainContent from '../components/MainContent'
import Sidebar from '../components/Sidebar'
import Player from '../components/Player'

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
