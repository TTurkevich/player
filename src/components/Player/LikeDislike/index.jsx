import classes from './LikeDislike.module.css'
import Like from '../../icons/Like'
import Dislike from '../../icons/Dislike'

const LikeDislike = () => {
  return (
    <div
      className={`${classes['track-play__like-dis']} ${classes['_btn-icon']}`}
    >
      <div className={classes['track-play__like']}>
        <Like className={classes['track-play__like-svg']} />
      </div>
      <div className={classes['track-play__dislike']}>
        <Dislike className={classes['track-play__dislike-svg']} />
      </div>
    </div>
  )
}

export default LikeDislike
