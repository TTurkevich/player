import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useTheme } from '../../context/Theme/ThemeProvider'

import Controls from './Controls'
import Volume from './Volume'

import { useInfo } from '../../features/controls/use-info'
import { selectControls, setId } from '../../features/controls/controls-slice'
import { shuffle } from '../../features/general-action'

import cn from 'classnames'
import classes from './index.module.css'

const changeTrackStyling = (duration, trackProgress, theme) => {
  let colorStart, colorStop

  if (theme === 'dark') {
    colorStart = '#AD61FF'
    colorStop = '#2e2e2e'
  } else {
    colorStart = '#AD61FF'
    colorStop = '#d9d9d9'
  }
  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : '0%'

  const trackStyling = `
-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, ${colorStart} ), color-stop(${currentPercentage}, ${colorStop} ))
`
  return trackStyling
}

const Player = () => {
  const dispatch = useDispatch()
  const { theme } = useTheme()
  const controls = useSelector(selectControls)
  const tracks = useInfo()

  const [trackIndex, setTrackIndex] = useState(0)
  const [trackProgress, setTrackProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeRepeat, setActiveRepeat] = useState(false)
  const [sort, setSort] = useState(false)
  const [volume, setVolume] = useState(0.1)

  const { id, name, author, track_file } = tracks[trackIndex]

  if (!tracks) return null

  const audioRef = useRef(new Audio(track_file))
  const { duration } = audioRef.current
  audioRef.current.volume = volume
  const intervalRef = useRef()
  const isReady = useRef(false)

  useEffect(() => {
    //play/pause
    if (isPlaying) {
      audioRef.current.play()
      startTimer()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    return () => {
      audioRef.current.pause()
      clearInterval(intervalRef.current)
    }
  }, [controls, sort])

  useEffect(() => {
    audioRef.current.pause()
    audioRef.current = new Audio(track_file)
    setTrackProgress(audioRef.current.currentTime)

    if (isPlaying && isReady.current) {
      audioRef.current.play()
      setIsPlaying(true)
      startTimer()
    } else {
      isReady.current = true
    }
  }, [trackIndex, controls, sort])

  const colorTrackBar = changeTrackStyling(duration, trackProgress, theme)

  const startTimer = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        nextTrack()
      } else {
        setTrackProgress(audioRef.current.currentTime)
      }
    }, [1000])
  }

  const onScrub = (value) => {
    clearInterval(intervalRef.current)
    audioRef.current.currentTime = value
    setTrackProgress(audioRef.current.currentTime)
  }

  const onScrubEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true)
    }
    startTimer()
  }

  const prevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1)
    } else {
      setTrackIndex(trackIndex - 1)
    }
  }

  const nextTrack = () => {
    
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1)
    } else {
      setTrackIndex(0)
    }
  }

  const repeatTrack = () => {
    if (!activeRepeat) {
      setActiveRepeat(true)
      audioRef.current.loop = true
    } else {
      setActiveRepeat(false)
      audioRef.current.loop = false
      if (audioRef.current.ended) {
        nextTrack()
      }
    }
  }

  const shuffleTracks = () => {
    dispatch(setId(''))
    dispatch(shuffle())
    audioRef.current.currentTime = 0
    setTrackIndex(0)

    sort === true ? setSort(false) : setSort(true)
  }

  const changeVolume = (value) => {
    const percent = 100
    return setVolume(value / percent)
  }

  return (
    <div className={classes.bar}>
      <div className={classes.content}>
        <input
          className={cn(classes.playerProgress, classes[theme])}
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          style={{
            background: `${colorTrackBar}`,
          }}
        />
        <div className={classes.playerBlock}>
          <Controls
            id={id}
            title={name}
            author={author}
            isPlaying={isPlaying}
            onPlayPauseClick={setIsPlaying}
            onPrevClick={prevTrack}
            onNextClick={nextTrack}
            onRepeatTrack={repeatTrack}
            activeRepeat={activeRepeat}
            onShuffleTracks={shuffleTracks}
          />
          <Volume changeVolume={changeVolume} />
        </div>
      </div>
    </div>
  )
}

export default Player
