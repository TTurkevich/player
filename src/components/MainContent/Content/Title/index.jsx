import classes from './Title.module.css'

const Title = () => {
  return (
    <div className={`${classes.content__title} ${classes['playlist-title']}`}>
      <div className={`${classes['playlist-title__col']} ${classes.col01}`}>
        Трек
      </div>
      <div className={`${classes['playlist-title__col']} ${classes.col02}`}>
        ИСПОЛНИТЕЛИ
      </div>
      <div className={`${classes['playlist-title__col']} ${classes.col03}`}>
        АЛЬБОМ
      </div>
      <div className={`${classes['playlist-title__col']} ${classes.col04}`}>
        <svg className={classes['playlist-title__svg']} alt="time">
          <use
            xlinkHref={
              process.env.PUBLIC_URL + 'img/icon/sprite.svg#icon-watch'
            }
          ></use>
        </svg>
      </div>
    </div>
  )
}

export default Title
