import classes from './Track.module.css'
import Note from '../../../icons/Note'
import Author from '../../../TrackItems/Author'
import Album from '../../../TrackItems/Album'
import Time from '../../../TrackItems/Time'

const Track = (props) => {
  return (
    <div className={classes.playlist__item}>
      <div className={`${classes.playlist__track} ${classes.track}`}>
        <div className={classes.track__title}>
          <div className={classes['track__title-image']}>
            <Note className={classes['track__title-svg']} />
          </div>
          <div className={classes['track__title-text']}>
            <a className={classes['track__title-link']} href="http://">
              {props.title}
              <span className={classes['track__title-span']}></span>
            </a>
          </div>
        </div>

        <Author
          classNameDiv={classes.track__author}
          classNameLink={classes['track__author-link']}
          title={props.author}
        />
        <Album
          classNameDiv={classes.track__album}
          classNameLink={classes['track__album-link']}
          title={props.album}
        />
        <Time
          classNameDiv={classes.track__time}
          classNameSpan={classes['track__time-text']}
          time={props.time}
          className={classes['track__time-svg']}
        />
      </div>
    </div>
  )
}

export default Track
