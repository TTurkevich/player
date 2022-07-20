import './App.css'
import Nav from './components/Navigation/Nav'
import Centerblock from './components/Centerblock/Centerblock'
import Sidebar from './components/Sidebar/Sidebar'
import Player from './components/Player/Player'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Nav />
          <Centerblock />
          <Sidebar />
        </main>
        <Player />
        <Footer />
      </div>
    </div>
  )
}

export default App
