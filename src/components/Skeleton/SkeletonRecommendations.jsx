import classes from './index.module.css'
import cn from 'classnames'

const SkeletonRecommendations = () => {
  return (
    <div>
      {Array(3)
        .fill()
        .map((item, index) => {
          return (
            <div
              key={index}
              className={cn(classes.selections, classes.skeleton)}
            ></div>
          )
        })}
    </div>
  )
}

export default SkeletonRecommendations
