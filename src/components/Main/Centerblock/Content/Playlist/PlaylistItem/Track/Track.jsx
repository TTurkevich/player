import classes from './Track.module.css'
import Title from './Title/Title'
import Author from './Author/Author'
import Album from './Album/Album'
import Time from './Time/Time'

const Track = (props) => {
  return (
    <div className={`${classes.playlist__track} ${classes.track}`}>
      <Title title={props.title} />
      <Author author={props.author} />
      <Album album={props.album} />
      <Time time={props.time} />
    </div>
  )
}

export default Track
