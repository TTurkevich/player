import classes from './index.module.css'

import VolumeProgress from '../VolumeProgress'
import VolumeSpeaker from '../../Svg/VolumeSpeaker'


const Volume = () => {
  return (
    <div className={classes.volumeBlock}>
      <div className={classes.content}>
        <div className={classes.image}>
          <VolumeSpeaker className={classes.icon} />
        </div>
        <VolumeProgress />
      </div>
    </div>
  )
}

export default Volume
