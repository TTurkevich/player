import classes from '../Buttons.module.css'

const Prev = () => {
  return (
    <div className={classes['player__btn-prev']}>
      <svg className={classes['player__btn-prev-svg']} alt="prev">
        <use
          xlinkHref={process.env.PUBLIC_URL + 'img/icon/sprite.svg#icon-prev'}
        ></use>
      </svg>
    </div>
  )
}

export default Prev
