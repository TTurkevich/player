import cn from 'classnames'

import { useTheme } from '../../context/Theme/ThemeProvider'

import classes from './index.module.css'

const SkeletonPlaylist = () => {
  const { theme } = useTheme()
  return (
    <>
      {Array(10)
        .fill()
        .map((item, index) => {
          return (
            <div key={index} className={classes.item}>
              <div className={classes.track}>
                <div className={classes.title}>
                  <div
                    className={cn(
                      classes.titleImage,
                      classes.skeleton,
                      classes[theme]
                    )}
                  ></div>
                  <div
                    className={cn(
                      classes.titleText,
                      classes.skeleton,
                      classes[theme]
                    )}
                  ></div>
                </div>
                <div
                  className={cn(
                    classes.author,
                    classes.skeleton,
                    classes[theme]
                  )}
                ></div>
                <div
                  className={cn(
                    classes.album,
                    classes.skeleton,
                    classes[theme]
                  )}
                ></div>
              </div>
            </div>
          )
        })}
    </>
  )
}

export default SkeletonPlaylist
