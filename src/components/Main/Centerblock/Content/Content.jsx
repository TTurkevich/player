import classes from './Content.module.css'
import Title from './Title/Title'
import Playlist from './Playlist/Playlist'

const Content = () => {
  return <div className={classes.centerblock__content}>
    <Title />
    <Playlist />
  </div>
}

export default Content
