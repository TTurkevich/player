import Note from '../../Svg/Note'
import classes from './index.module.css'

const Title = ({ title, clarification }) => {
  return (
    <div className={classes.title}>
      <div className={classes.titleImage}>
        <Note className={classes.titleSvg} />
      </div>
      <div>
        <a className={classes.titleLink} href="http://">
          {title}
          <span className={classes.titleSpan}>{clarification}</span>
        </a>
      </div>
    </div>
  )
}

export default Title
