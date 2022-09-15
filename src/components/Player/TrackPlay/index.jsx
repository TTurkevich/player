import classes from './index.module.css'

import Album from '../../Track/Album'
import Author from '../../Track/Author'
import Note from '../../Icons/Note'

const TrackPlay = ({ title, author }) => {
  return (
    <div className={classes.contain}>
      <div className={classes.image}>
        <Note className={classes.icon} />
      </div>
      <Author
        wrapperClassName={classes.author}
        linkClassName={classes.authorLink}
        title={author}
      />
      <Album
        wrapperClassName={classes.album}
        linkClassName={classes.albumLink}
        title={title}
      />
    </div>
  )
}

export default TrackPlay
