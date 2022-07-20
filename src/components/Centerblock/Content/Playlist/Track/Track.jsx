import classes from './Track.module.css'

const Track = (props) => {
  return (
    <div className={classes.playlist__item}>
      <div className={`${classes.playlist__track} ${classes.track}`}>
        <div className={classes.track__title}>
          <div className={classes['track__title-image']}>
            <svg className={classes['track__title-svg']} alt="music">
              <use
                xlinkHref={
                  process.env.PUBLIC_URL + 'img/icon/sprite.svg#icon-note'
                }
              ></use>
            </svg>
          </div>
          <div className={classes['track__title-text']}>
            <a className={classes['track__title-link']} href="http://">
              {props.title}{' '}
              <span className={classes['track__title-span']}></span>
            </a>
          </div>
        </div>
        <div className={classes.track__author}>
          <a className={classes['track__author-link']} href="http://">
            {props.author}
          </a>
        </div>
        <div className={classes.track__album}>
          <a className={classes['track__album-link']} href="http://">
            {props.album}
          </a>
        </div>
        <div className={classes.track__time}>
          <svg className={classes['track__time-svg']} alt="time">
            <use
              xlinkHref={
                process.env.PUBLIC_URL + 'img/icon/sprite.svg#icon-like'
              }
            ></use>
          </svg>
          <span className={classes['track__time-text']}>{props.time}</span>
        </div>
      </div>
    </div>
  )
}

export default Track
