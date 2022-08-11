import classes from './index.module.css'

import Note from '../../Icons/Note'

const Title = ({ title, clarification }) => {
  return (
    <div className={classes.title}>
      <div className={classes.titleImage}>
        <Note className={classes.titleIcon} />
      </div>
      <div>
        <a className={classes.titleLink} href="http://">
          {title}
          <span className={classes.сlarification}>{clarification}</span>
        </a>
      </div>
    </div>
  )
}

export default Title
