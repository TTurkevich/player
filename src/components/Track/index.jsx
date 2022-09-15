import cn from 'classnames'

import classes from './index.module.css'

import Author from './Author'
import Album from './Album'
import Time from './Time'
import Title from './Title'

const Track = ({ title, album, author, time }) => {
  return (
    <div className={classes.item}>
      <div className={classes.track}>
        <Title title={title} />
        <Author
          wrapperClassName={classes.author}
          linkClassName={classes.authorLink}
          title={author}
        />
        <Album
          wrapperClassName={classes.album}
          linkClassName={classes.albumLink}
          title={album}
        />
        <Time
          wrapperClassName={cn(classes.btnIcon, classes.btn)}
          timeClassName={classes.timeText}
          time={time}
          className={classes.timeIcon}
        />
      </div>
    </div>
  )
}

export default Track
