import classes from './index.module.css'
import cn from 'classnames'
import Author from './Author'
import Album from './Album'
import Time from './Time'
import Title from './Title'

const Track = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.track}>
        <Title
          wrapperClassName={classes.title}
          iconWrapperClassName={classes.titleImage}
          iconClassName={classes.titleSvg}
          titleClassName={classes.titleText}
          linkClassName={classes.titleLink}
          title={props.title}
          spanClassName={classes.titleSpan}
          clarification={props.clarification}
        />
        <Author
          wrapperClassName={classes.author}
          linkClassName={classes.authorLink}
          title={props.author}
        />
        <Album
          wrapperClassName={classes.album}
          linkClassName={classes.albumLink}
          title={props.album}
        />
        <Time
          wrapperClassName={cn(classes.btnIcon, classes.btn)}
          timeClassName={classes.timeText}
          time={props.time}
          className={classes.timeSvg}
        />
      </div>
    </div>
  )
}

export default Track
