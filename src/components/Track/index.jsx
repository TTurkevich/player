import classes from './index.module.css'
import TrackItem from '../TrackItem'

const Track = (props) => {
  return (
    <div className={classes.item}>
      <TrackItem
        title={props.title}
        author={props.author}
        album={props.album}
        time={props.time}
      />
    </div>
  )
}

export default Track
