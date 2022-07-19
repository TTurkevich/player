import classes from './Image.module.css'

const Image = () => {
  return (
    <div className={classes['track-play__image']}>
      <svg className={classes['track-play__svg']} alt="music">
        <use
          xlinkHref={process.env.PUBLIC_URL + 'img/icon/sprite.svg#icon-note'}
        ></use>
      </svg>
    </div>
  )
}

export default Image
