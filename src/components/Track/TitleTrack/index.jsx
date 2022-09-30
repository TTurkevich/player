import classes from './index.module.css'

const TitleTrack = ({ title }) => {
  return (
    <div className={classes.title}>
      <a className={classes.titleLink} href="#">
        {title}
      </a>
    </div>
  )
}

export default TitleTrack
