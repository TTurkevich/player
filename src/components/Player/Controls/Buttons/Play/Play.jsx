import classes from '../Buttons.module.css'

const Play = () => {
  return (
    <div className={`${classes['player__btn-play']} ${classes._btn}`}>
      <svg className={classes['player__btn-play-svg']} alt="prev">
        <use
          xlinkHref={process.env.PUBLIC_URL + 'img/icon/sprite.svg#icon-play'}
        ></use>
      </svg>
    </div>
  )
}

export default Play
