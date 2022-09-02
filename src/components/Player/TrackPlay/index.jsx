import classes from './index.module.css'

import Album from '../../Track/Album'
import Author from '../../Track/Author'
import Note from '../../Icons/Note'

const TrackPlay = ({ track, reference }) => {
  return (
    <>
      {track.items.map((item) => {
        return (
          <div key={item.id} className={classes.contain}>
            <div className={classes.image}>
              <Note className={classes.icon} />
            </div>
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
            <audio ref={reference} src={item.audio}></audio>
          </div>
        )
      })}
    </>
  )
}

export default TrackPlay
