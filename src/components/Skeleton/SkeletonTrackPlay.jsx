import cn from 'classnames'

import classes from './index.module.css'

const SkeletonTrackPlay = () => {
  return (
    <div className={classes.contain}>
      <div className={cn(classes.trackPlayImage, classes.skeleton)}></div>
      <div>
        <div className={cn(classes.trackPlaySing, classes.skeleton)}></div>
        <div className={cn(classes.trackPlaySing, classes.skeleton)}></div>
      </div>
    </div>
  )
}
export default SkeletonTrackPlay
