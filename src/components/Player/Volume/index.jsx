import classes from './index.module.css'
import VolumeSpeaker from '../../Svg/VolumeSpeaker'
import VolumeProgress from '../VolumeProgress'

const Volume = () => {
  return (
    <div className={classes.volumeBlock}>
      <div className={classes.content}>
        <div className={classes.image}>
          <VolumeSpeaker className={classes.svg} />
        </div>
        <VolumeProgress />
      </div>
    </div>
  )
}

export default Volume
