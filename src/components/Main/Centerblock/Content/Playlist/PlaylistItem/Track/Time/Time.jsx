import classes from './Time.module.css'

const Time = (props) => {
  return (
    <div className={classes.track__time}>
      <svg className={classes['track__time-svg']} alt="time">
        <use xlinkHref={process.env.PUBLIC_URL + 'img/icon/sprite.svg#icon-like'}></use>
      </svg>
      <span className={classes['track__time-text']}>{props.time}</span>
    </div>
  )
}

export default Time
