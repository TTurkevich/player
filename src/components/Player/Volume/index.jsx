import classes from './Volume.module.css'
import VolumeSpeaker from '../../icons/VolumeSpeaker'
import VolumeProgress from '../VolumeProgress'

const Volume = () => {
  return (
    <div className={`${classes['bar__volume-block']} ${classes.volume}`}>
      <div className={classes.volume__content}>
        <div className={classes.volume__image}>
          <VolumeSpeaker className={classes.volume__svg} />
        </div>
        <VolumeProgress />
      </div>
    </div>
  )
}

export default Volume
