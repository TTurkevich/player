import classes from './index.module.css'
import cn  from 'classnames'
import GlobalSvgSelector from '../../GlobalSvg'
import Author from '../../TrackItem/Author'
import Album from '../../TrackItem/Album'
import LikeDislike from '../LikeDislike'

const TrackPlay = () => {
  return (
    <div className={cn(classes['player__track-play'], classes['track-play'])}>
      <div className={classes['track-play__contain']}>
        <div className={classes['track-play__image']}>
          <GlobalSvgSelector
            id="Note"
            iconClassName={classes['track-play__svg']}
          />
        </div>
        <Author
          wrapperClassName={classes['track-play__author']}
          linkClassName={classes['track-play__author-link']}
          title="Ты та..."
        />
        <Album
          wrapperClassName={classes['track-play__album']}
          linkClassName={classes['track-play__album-link']}
          title="Баста"
        />
      </div>
      <LikeDislike />
    </div>
  )
}

export default TrackPlay
