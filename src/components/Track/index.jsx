import classes from './index.module.css'
import cn from 'classnames'
import Author from './Author'
import Album from './Album'
import Time from './Time'
import Title from './Title'

const Track = ({ track }) => {
  return (
    <>
      {track.items.map((item, index) => {
        return (
          <div key={index} className={classes.item}>
            <div className={classes.track}>
              <Title title={item.title} />
              <Author
                wrapperClassName={classes.author}
                linkClassName={classes.authorLink}
                title={item.author}
              />
              <Album
                wrapperClassName={classes.album}
                linkClassName={classes.albumLink}
                title={item.album}
              />
              <Time
                wrapperClassName={cn(classes.btnIcon, classes.btn)}
                timeClassName={classes.timeText}
                time={item.time}
                className={classes.timeSvg}
              />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Track
