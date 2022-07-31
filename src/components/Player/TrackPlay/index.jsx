import classes from './index.module.css'
import Note from '../../Svg/Note'
import Author from '../../Track/Author'
import Album from '../../Track/Album'
import LikeDislike from '../LikeDislike'

const TrackPlay = () => {
  return (
    <div className={classes.trackPlay}>
      <div className={classes.contain}>
        <div className={classes.image}>
          <Note className={classes.svg} />
        </div>
        <Author
          wrapperClassName={classes.author}
          linkClassName={classes.authorLink}
          title="Ты та..."
        />
        <Album
          wrapperClassName={classes.album}
          linkClassName={classes.albumLink}
          title="Баста"
        />
      </div>
      <LikeDislike />
    </div>
  )
}

export default TrackPlay
