import cn from 'classnames'

import { useTheme } from '../../../context/Theme/ThemeProvider'

import classes from './index.module.css'

import VolumeProgress from '../VolumeProgress'
import VolumeSpeaker from '../../Icons/VolumeSpeaker'

const Volume = () => {
  const { theme } = useTheme()
  return (
    <div className={classes.volumeBlock}>
      <div className={classes.content}>
        <div className={classes.image}>
          <VolumeSpeaker className={cn(classes.icon, classes[theme])} />
        </div>
        <VolumeProgress />
      </div>
    </div>
  )
}

export default Volume
