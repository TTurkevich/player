import cn from 'classnames'

import { useTheme } from '../../context/Theme/ThemeProvider'

import classes from './index.module.css'

const SkeletonTrackPlay = () => {
  const { theme } = useTheme()
  return (
    <div className={classes.contain}>
      <div
        className={cn(classes.trackPlayImage, classes.skeleton, classes[theme])}
      ></div>
      <div>
        <div
          className={cn(
            classes.trackPlaySing,
            classes.skeleton,
            classes[theme]
          )}
        ></div>
        <div
          className={cn(
            classes.trackPlaySing,
            classes.skeleton,
            classes[theme]
          )}
        ></div>
      </div>
    </div>
  )
}
export default SkeletonTrackPlay
