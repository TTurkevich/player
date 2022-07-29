import classes from './index.module.css'
import cn from 'classnames'
import Watch from '../../Svg/Watch'

const TrackTableHats = () => {
  return (
    <div className={cn(classes.content__title, classes['playlist-title'])}>
      <div className={cn(classes.col, classes.col01)}>
        Трек
      </div>
      <div className={cn(classes.col, classes.col02)}>
        Иcполнители
      </div>
      <div className={cn(classes.col, classes.col03)}>
        Альбом
      </div>
      <div className={cn(classes.col, classes.col04)}>
        <Watch iconClassName={classes.svg} />
      </div>
    </div>
  )
}

export default TrackTableHats


