import classes from './Like.module.css'

const Like = () => {
  return (
    <div className={`${classes['track-play__like']} ${classes['_btn-icon']}`}>
      <svg className={classes['track-play__like-svg']} alt="like">
        <use
          xlinkHref={process.env.PUBLIC_URL + 'img/icon/sprite.svg#icon-like'}
        ></use>
      </svg>
    </div>
  )
}

export default Like
