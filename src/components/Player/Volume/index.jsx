import classes from './index.module.css'
import cn  from 'classnames'
import GlobalSvgSelector from '../../GlobalSvg'
import VolumeProgress from '../VolumeProgress'

const Volume = () => {
  return (
    <div className={cn(classes['bar__volume-block'], classes.volume)}>
      <div className={classes.volume__content}>
        <div className={classes.volume__image}>
          <GlobalSvgSelector
            id="VolumeSpeaker"
            iconClassName={classes['volume__svg']}
          />
        </div>
        <VolumeProgress />
      </div>
    </div>
  )
}

export default Volume
