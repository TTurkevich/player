import classes from './index.module.css'
import cn from 'classnames'
import Like from '../../Svg/Like'
import Dislike from '../../Svg/Dislike'

const LikeDislike = () => {
  return (
    <div className={classes['track-play__like-dis']}>
      <div className={cn(classes.like, classes['_btn-icon'], classes['_btn'])}>
        <Like iconClassName={classes['like-svg']} />
      </div>
      <div className={cn(classes.dislike, classes['_btn-icon'], classes['_btn'])}>
        <Dislike iconClassName={classes['dislike-svg']} />
      </div>
    </div>
  )
}

export default LikeDislike
