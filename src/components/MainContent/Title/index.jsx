import classes from './index.module.css'
import cn  from 'classnames'
import GlobalSvgSelector from '../../GlobalSvg'

const Title = () => {
  return (
    <div className={cn(classes.content__title, classes['playlist-title'])}>
      <div className={cn(classes['playlist-title__col'], classes.col01)}>
        Трек
      </div>
      <div className={cn(classes['playlist-title__col'], classes.col02)}>
        ИСПОЛНИТЕЛИ
      </div>
      <div className={cn(classes['playlist-title__col'], classes.col03)}>
        АЛЬБОМ
      </div>
      <div className={cn(classes['playlist-title__col'], classes.col04)}>
        <GlobalSvgSelector
          id="Watch"
          iconClassName={classes['playlist-title__svg']}
        />
      </div>
    </div>
  )
}

export default Title

/* <svg className={classes['playlist-title__svg']} alt="time">
          <use
            xlinkHref={
              process.env.PUBLIC_URL + 'img/icon/sprite.svg#icon-watch'
            }
          ></use>
        </svg>*/
