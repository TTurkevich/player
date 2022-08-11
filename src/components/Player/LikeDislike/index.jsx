import cn from 'classnames'

import classes from './index.module.css'

import Dislike from '../../Icons/Dislike'
import Like from '../../Icons/Like'


const LikeDislike = () => {
  return (
    <div className={classes.likeDis}>
      <div className={cn(classes.like, classes.btnIcon, classes.btn)}>
        <Like className={classes.likeIcon} />
      </div>
      <div className={cn(classes.dislike, classes.btnIcon, classes.btn)}>
        <Dislike className={classes.dislikeIcon} />
      </div>
    </div>
  )
}

export default LikeDislike
