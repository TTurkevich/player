import classes from './index.module.css'
import cn from 'classnames'
import VolumeSpeaker from '../../Svg/VolumeSpeaker'
import VolumeProgress from '../VolumeProgress'

const Volume = () => {
  return (
    <div className={cn(classes['bar__volume-block'], classes.volume)}>
      <div className={classes.content}>
        <div className={classes.image}>
          <VolumeSpeaker iconClassName={classes.svg} />
        </div>
        <VolumeProgress />
      </div>
    </div>
  )
}

export default Volume
