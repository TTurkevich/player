import classes from '../Controls.module.css'

const Repeat = () => {
  return (
    <div className={`${classes['player__btn-repeat']} ${classes['_btn-icon']}`}>
      <svg className={classes['player__btn-repeat-svg']} alt="prev">
        <use
          xlinkHref={process.env.PUBLIC_URL + 'img/icon/sprite.svg#icon-repeat'}
        ></use>
      </svg>
    </div>
  )
}

export default Repeat
