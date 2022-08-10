import cn from 'classnames'

import classes from './index.module.css'


const SkeletonPlaylist = () => {
  return (
    <>
      {Array(10)
        .fill()
        .map((item, index) => {
          return (
            <div key={index} className={classes.item}>
              <div className={classes.track}>
                <div className={classes.title}>
                  <div className={cn(classes.titleImage, classes.skeleton)}></div>
                  <div className={cn(classes.titleText, classes.skeleton)}></div>
                </div>
                <div className={cn(classes.author, classes.skeleton)}></div>
                <div className={cn(classes.album, classes.skeleton)}></div>
              </div>
            </div>
          )
        })}
    </>
  )
}

export default SkeletonPlaylist
