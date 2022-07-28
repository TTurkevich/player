import classes from './index.module.css'
import cn from 'classnames'
import Author from './Author'
import Album from './Album'
import Time from './Time'
import Title from './Title'

const TrackItem = (props) => {
  return (
    <div className={cn(classes.playlist__track, classes.track)}>
      <Title
        wrapperClassName={classes.track__title}
        iconWrapperClassName={classes['track__title-image']}
        iconClassName={classes['track__title-svg']}
        titleClassName={classes['track__title-text']}
        linkClassName={classes['track__title-link']}
        title={props.title}
      />
      <Author
        wrapperClassName={classes.track__author}
        linkClassName={classes['track__author-link']}
        title={props.author}
      />
      <Album
        wrapperClassName={classes.track__album}
        linkClassName={classes['track__album-link']}
        title={props.album}
      />
      <Time
        wrapperClassName={classes.track__time}
        timeClassName={classes['track__time-text']}
        time={props.time}
        className={classes['track__time-svg']}
      />
    </div>
  )
}

export default TrackItem
