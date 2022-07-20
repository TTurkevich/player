import classes from './Dislike.module.css'

const Dislike = () => {
  return (
    <div className={`${classes['track-play__dislike']} ${classes['_btn-icon']}`}>
      <svg className={classes['track-play__dislike-svg']} alt="dislike">
        <use
          xlinkHref={process.env.PUBLIC_URL + 'img/icon/sprite.svg#icon-dislike'}
        ></use>
      </svg>
    </div>
  )
}

export default Dislike
