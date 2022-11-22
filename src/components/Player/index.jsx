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
import {
  setTrackIndex,
  selectPlayer,
  setRepeat,
  setIsPlaying,
  setSort,
  setCurrentTrack,
} from '../../features/player/player-slice'
import { changeTrackStyling, setTrack } from './helpers'

const Player = () => {
  const dispatch = useDispatch()
  const { theme } = useTheme()
  const [trackProgress, setTrackProgress] = useState(0)
  const [volume, setVolume] = useState(0.1)

  const controls = useSelector(selectControls)
  const { isPlaying, trackIndex, repeat, sort } = useSelector(selectPlayer)

  useEffect(() => {
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
      dispatch(setIsPlaying(false))
      clearInterval(intervalRef.current)
    }
  }, [])

  const tracks = useInfo()

  const { id, name, author, track_file } = setTrack(tracks, trackIndex)

  const audioRef = useRef(new Audio(track_file))
  audioRef.current.loop = repeat
  audioRef.current.volume = volume
  const { duration } = audioRef.current
  const intervalRef = useRef()
  const isReady = useRef(false)

  useEffect(() => {
    audioRef.current.pause()
    dispatch(setIsPlaying(false))
    audioRef.current = new Audio(track_file)
    dispatch(setCurrentTrack(track_file))
    setTrackProgress(audioRef.current.currentTime)

    if (isPlaying && isReady.current) {
      audioRef.current.play()
      dispatch(setIsPlaying(true))
      startTimer()
    } else {
      isReady.current = true
    }
  }, [trackIndex])

  useEffect(() => {
    audioRef.current.pause()
    dispatch(setIsPlaying(false))
    dispatch(setTrackIndex(0))
    clearInterval(intervalRef.current)
    audioRef.current = new Audio(track_file)
    dispatch(setCurrentTrack(track_file))
    setTrackProgress(audioRef.current.currentTime)
    isReady.current = true
  }, [controls, sort])

  const colorTrackBar = changeTrackStyling(duration, trackProgress, theme)

  const startTimer = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        if (tracks.length === 1) {
          audioRef.current.pause()
          dispatch(setIsPlaying(false))
          clearInterval(intervalRef.current)
        } else nextTrack()
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
      dispatch(setIsPlaying(true))
    }
    startTimer()
  }

  const onPlayPauseClick = () => {
    dispatch(setIsPlaying(!isPlaying))
  }

  const prevTrack = () => {
    if (trackIndex - 1 < 0) {
      dispatch(setTrackIndex(tracks.length - 1))
    } else {
      dispatch(setTrackIndex(trackIndex - 1))
    }
  }

  const nextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      dispatch(setTrackIndex(trackIndex + 1))
    } else {
      dispatch(setTrackIndex(0))
    }
  }

  const repeatTrack = () => {
    dispatch(setRepeat(!repeat))
  }

  const shuffleTracks = () => {
    dispatch(setId(''))
    dispatch(shuffle())
    dispatch(setSort())
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
          disabled={tracks.length > 0 ? false : true}
        />
        <div className={classes.playerBlock}>
          <Controls
            id={id}
            title={name}
            author={author}
            isPlaying={isPlaying}
            onPlayPauseClick={onPlayPauseClick}
            onPrevClick={prevTrack}
            onNextClick={nextTrack}
            onRepeatTrack={repeatTrack}
            activeRepeat={repeat}
            onShuffleTracks={shuffleTracks}
            disabled={tracks.length > 0 ? false : true}
          />
          <Volume changeVolume={changeVolume} />
        </div>
      </div>
    </div>
  )
}

export default Player
