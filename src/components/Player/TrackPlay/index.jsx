import classes from './index.module.css'

import TitleTrack from '../../Track/TitleTrack'
import Author from '../../Track/Author'
import IconNote from '../../Track/IconNote'

const TrackPlay = ({ title, author }) => {
  return (
    <div className={classes.contain}>
      <IconNote />
      <Author title={author} />
      <TitleTrack title={title} />
    </div>
  )
}

export default TrackPlay
