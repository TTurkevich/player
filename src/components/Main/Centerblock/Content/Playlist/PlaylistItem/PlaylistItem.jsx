import classes from './PlaylistItem.module.css'
import Track from './Track/Track'

const PlaylistItem = (props) => {
  return (
    <div className={classes.playlist__item}>
      <Track
        title={props.title}
        author={props.author}
        album={props.album}
        time={props.time}
      />
    </div>
  )
}

export default PlaylistItem
