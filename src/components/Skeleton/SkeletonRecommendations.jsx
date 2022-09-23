import cn from 'classnames'

import { useTheme } from '../../context/Theme/ThemeProvider'

import classes from './index.module.css'

const SkeletonRecommendations = () => {
  const { theme } = useTheme()
  return (
    <div>
      {Array(3)
        .fill()
        .map((item, index) => {
          return (
            <div
              key={index}
              className={cn(
                classes.selections,
                classes.skeleton,
                classes[`${theme}`]
              )}
            ></div>
          )
        })}
    </div>
  )
}

export default SkeletonRecommendations
