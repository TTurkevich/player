import classes from './Image.module.css'

const Image = () => {
  return (
    <div className={classes.volume__image}>
      <svg className={classes.volume__svg} alt="volume">
        <use xlinkHref={process.env.PUBLIC_URL + 'img/icon/sprite.svg#icon-volume'}></use>
      </svg>
    </div>
  )
}

export default Image
