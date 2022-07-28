import classes from './index.module.css'
import cn  from 'classnames'
import GlobalSvgSelector from '../../GlobalSvg'

const LikeDislike = () => {
  return (
    <div
      className={cn(classes['track-play__like-dis'], classes['_btn-icon'])}
    >
      <div className={classes['track-play__like']}>
        <GlobalSvgSelector
          id="Like"
          iconClassName={classes['track-play__like-svg']}
        />
      </div>
      <div className={classes['track-play__dislike']}>
        <GlobalSvgSelector
          id="Dislike"
          iconClassName={classes['track-play__dislike-svg']}
        />
      </div>
    </div>
  )
}

export default LikeDislike
