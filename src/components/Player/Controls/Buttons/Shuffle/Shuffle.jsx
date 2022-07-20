import classes from '../Buttons.module.css'

const Shuffle = () => {
  return (
    <div
      className={`${classes['player__btn-shuffle']} ${classes['_btn-icon']}`}
    >
      <svg className={classes['player__btn-shuffle-svg']} alt="shuffle">
        <use
          xlinkHref={
            process.env.PUBLIC_URL + 'img/icon/sprite.svg#icon-shuffle'
          }
        ></use>
      </svg>
    </div>
  )
}

export default Shuffle
