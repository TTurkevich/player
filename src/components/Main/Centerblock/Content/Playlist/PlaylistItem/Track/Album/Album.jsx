import classes from './Album.module.css'

const Album = (props) => {
  return (
    <div className={classes.track__album}>
      <a className={classes['track__album-link']} href="http://">
        {props.album}
      </a>
    </div>
  )
}

export default Album
