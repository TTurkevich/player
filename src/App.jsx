import './App.css'
import Nav from './components/Navigation'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import Player from './components/Player'

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
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
