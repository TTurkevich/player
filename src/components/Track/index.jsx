import classes from './index.module.css'

import Author from './Author'
import Album from './Album'
import Time from './Time'
import Title from './Title'

const Track = ({ title, album, author, time, clarification }) => {
  

  return (
    <div className={classes.item}>
      <div className={classes.track}>
        <Title title={title} clarification={clarification} />
        <Author title={author} />
        <Album title={album} />
        <Time time={time} />
      </div>
    </div>
  )
}

export default Track
