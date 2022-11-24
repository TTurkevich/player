import classes from './index.module.css'

const Playlist = ({ children }) => {
  return <div className={classes.playlist}>{children}</div>
}

export default Playlist
