import classes from './index.module.css'
import TrackItem from '../TrackItem'

const Track = (props) => {
  return (
    <div className={classes.playlist__item}>
      <TrackItem
        title={props.title}
        author={props.author}
        album={props.album}
        time={props.time}
      />
    </div>
  )
}

/*import Author from '../../../TrackItems/Author'
import Album from '../../../TrackItems/Album'
import Time from '../../../TrackItems/Time'
import cn from 'classnames'
import GlobalSvgSelector from '../../../GlobalSvg/GlobalSvgSelector'

const Track = (props) => {
  return (
    <div className={classes.playlist__item}>
      <div className={cn(classes.playlist__track, classes.track)}>
        <div className={classes.track__title}>
          <div className={classes['track__title-image']}>
            <GlobalSvgSelector
              id="Note"
              iconClassName={classes['track__title-svg']}
            />
          </div>
          <div className={classes['track__title-text']}>
            <a className={classes['track__title-link']} href="http://">
              {props.title}
              <span className={classes['track__title-span']}></span>
            </a>
          </div>
        </div>

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
    </div>
  )
}*/

export default Track
