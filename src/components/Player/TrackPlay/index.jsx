import classes from './TrackPlay.module.css'
import Note from '../../icons/Note'
import Author from '../../TrackItems/Author'
import Album from '../../TrackItems/Album'
import LikeDislike from '../LikeDislike'

const TrackPlay = () => {
  return (
    <div className={`${classes['player__track-play']} ${'track-play'}`}>
      <div className={classes['track-play__contain']}>
        <div className={classes['track-play__image']}>
          <Note className={classes['track-play__svg']} />
        </div>
        <Author
          classNameDiv={classes['track-play__author']}
          classNameLink={classes['track-play__author-link']}
          title="Ты та..."
        />
        <Album
          classNameDiv={classes['track-play__album']}
          classNameLink={classes['track-play__album-link']}
          title="Баста"
        />
      </div>
      <LikeDislike />
    </div>
  )
}

export default TrackPlay
