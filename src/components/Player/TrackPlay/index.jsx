import classes from './index.module.css'
import cn from 'classnames'
import Note from '../../Svg/Note'
import Author from '../../TrackItem/Author'
import Album from '../../TrackItem/Album'
import LikeDislike from '../LikeDislike'

const TrackPlay = () => {
  return (
    <div className={cn(classes['player__track-play'], classes['track-play'])}>
      <div className={classes.contain}>
        <div className={classes.image}>
          <Note iconClassName={classes.svg} />
        </div>
        <Author
          wrapperClassName={classes.author}
          linkClassName={classes['author-link']}
          title="Ты та..."
        />
        <Album
          wrapperClassName={classes.album}
          linkClassName={classes['album-link']}
          title="Баста"
        />
      </div>
      <LikeDislike />
    </div>
  )
}

export default TrackPlay
