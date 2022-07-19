import classes from './Title.module.css'

const Title = (props) => {
  return (
    <div className={classes.track__title}>
      <div className={classes['track__title-image']}>
        <svg className={classes['track__title-svg']} alt="music">
          <use
            xlinkHref={process.env.PUBLIC_URL + 'img/icon/sprite.svg#icon-note'}
          ></use>
        </svg>
      </div>
      <div className={classes['track__title-text']}>
        <a className={classes['track__title-link']} href="http://">
          {props.title} <span className={classes['track__title-span']}></span>
        </a>
      </div>
    </div>
  )
}

export default Title
