import classes from './index.module.css'
import Note from '../../Svg/Note'
import Author from '../../Track/Author'
import Album from '../../Track/Album'

const TrackPlay = ({ track }) => {
  return (
    <>
      {track.items.map((item) => {
        return (
          <div key={item.id} className={classes.contain}>
            <div className={classes.image}>
              <Note className={classes.svg} />
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
          </div>
        )
      })}
    </>
  )
}

export default TrackPlay
