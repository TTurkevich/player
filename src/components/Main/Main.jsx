import Nav from './Nav/Nav'
import Centerblock from './Centerblock/Centerblock'
import Sidebar from './Sidebar/Sidebar'
import classes from './Main.module.css'

const Main = () => {
  return (
    <main className={classes.main}>
      <Nav />
      <Centerblock />
      <Sidebar />
    </main>
  )
}

export default Main
