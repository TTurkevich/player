import classes from './Content.module.css'
import Title from './Title'
import Playlist from './Playlist'

const Content = () => {
  return (
    <div className={classes.centerblock__content}>
      <Title />
      <Playlist />
    </div>
  )
}

export default Content
