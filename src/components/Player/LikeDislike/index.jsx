import classes from './index.module.css'
import cn from 'classnames'
import Like from '../../Svg/Like'
import Dislike from '../../Svg/Dislike'

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
