import classes from './index.module.css'

import IconButton from '../IconButton'
import IconDisLike from '../../IconDisLike'
import IconLike from '../../IconLike'

const LikeDislike = () => {
  return (
    <div className={classes.likeDis}>
      <IconButton buttonClassName={classes.like} Icon={IconLike} />
      <IconButton buttonClassName={classes.dislike} Icon={IconDisLike} />
    </div>
  )
}

export default LikeDislike
