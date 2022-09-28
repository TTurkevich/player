import { useState, useRef } from 'react'
import cn from 'classnames'
import { useTheme } from '../../../context/Theme/ThemeProvider'

import classes from './index.module.css'

const changeProgress = (width, volumeProgress, theme) => {
  const currentPercentage = width ? `${(volumeProgress / width) * 100}%` : '10%'

  let colorStart, colorStop

  if (theme === 'dark') {
    colorStart = '#fff'
    colorStop = '#797979'
  } else {
    colorStart = '#AD61FF'
    colorStop = '#c4c4c4'
  }

  const barStyling = `
-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, ${colorStart} ), color-stop(${currentPercentage}, ${colorStop} ))`
  return barStyling
}

const VolumeProgress = () => {
  const { theme } = useTheme()
  const [volumeProgress, setVolumeProgress] = useState(10)
  const divProgress = useRef()

  const width = divProgress.current?.getBoundingClientRect().width

  const onScrub = (value) => {
    setVolumeProgress(value)
  }

  const colorProgress = changeProgress(width, volumeProgress, theme)

  return (
    <input
      ref={divProgress}
      className={cn(classes.slider, classes[theme])}
      style={{
        background: `${colorProgress}`,
      }}
      type="range"
      name="range"
      min="0"
      max="100"
      value={volumeProgress}
      volume={1.0}
      onChange={(e) => onScrub(e.target.value)}
    ></input>
  )
}

export default VolumeProgress
