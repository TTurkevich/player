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
        iconWrapperClassName={classes['title-image']}
        iconClassName={classes['title-svg']}
        titleClassName={classes['title-text']}
        linkClassName={classes['title-link']}
        title={props.title}
      />
      <Author
        wrapperClassName={classes.track__author}
        linkClassName={classes['author-link']}
        title={props.author}
      />
      <Album
        wrapperClassName={classes.track__album}
        linkClassName={classes['album-link']}
        title={props.album}
      />
      <Time
        wrapperClassName={cn(classes['track__time'], classes['_btn-icon'], classes['_btn'])}
        timeClassName={classes['time-text']}
        time={props.time}
        className={classes['time-svg']}
      />
    </div>
  )
}

export default TrackItem
