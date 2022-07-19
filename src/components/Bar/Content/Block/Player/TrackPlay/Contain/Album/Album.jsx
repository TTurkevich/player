import classes from './Album.module.css'

const Album = () => {
  return (
    <div className={classes['track-play__album']}>
      <a className={classes['track-play__album-link']} href="http://">
        Баста
      </a>
    </div>
  )
}

export default Album
