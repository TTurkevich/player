import classes from '../Buttons.module.css'

const Next = () => {
  return (
    <div className={classes['player__btn-next']}>
      <svg className={classes['player__btn-next-svg']} alt="next">
        <use
          xlinkHref={process.env.PUBLIC_URL + 'img/icon/sprite.svg#icon-next'}
        ></use>
      </svg>
    </div>
  )
}

export default Next
