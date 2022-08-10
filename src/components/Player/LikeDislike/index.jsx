import cn from 'classnames'

import classes from './index.module.css'

import Dislike from '../../Svg/Dislike'
import Like from '../../Svg/Like'


const LikeDislike = () => {
  return (
    <div className={classes.likeDis}>
      <div className={cn(classes.like, classes.btnIcon, classes.btn)}>
        <Like className={classes.likeSvg} />
      </div>
      <div className={cn(classes.dislike, classes.btnIcon, classes.btn)}>
        <Dislike className={classes.dislikeSvg} />
      </div>
    </div>
  )
}

export default LikeDislike
