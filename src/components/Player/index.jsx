import { useState, useEffect, useRef } from 'react'

import cn from 'classnames'
import classes from './index.module.css'

import Controls from './Controls'
import Volume from './Volume'
import tracks from '../../server/tracks'

const changeTrackStyling = (duration, trackProgress) => {
  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : '0%'

  const trackStyling = `
-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #d9b6ff ), color-stop(${currentPercentage}, #2e2e2e ))
`
  return trackStyling
}

const Player = () => {
  const [audioTracks, setAudioTracks] = useState(tracks)
  const [trackIndex, setTrackIndex] = useState(0)
  const [trackProgress, setTrackProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeRepeat, setActiveRepeat] = useState(false)

  const track = audioTracks[trackIndex]
  const audioRef = useRef(new Audio(track?.url))
  const { duration } = audioRef.current

  const intervalRef = useRef()
  const isReady = useRef(false)

  useEffect(() => {
    audioRef.current.pause()
    audioRef.current = new Audio(track?.url)
    setTrackProgress(audioRef.current.currentTime)

    if (isPlaying && isReady.current) {
      audioRef.current.play()
      setIsPlaying(true)
      startTimer()
    } else {
      isReady.current = true
    }
  }, [trackIndex])

  useEffect(() => {
    return () => {
      audioRef.current.pause()
      clearInterval(intervalRef.current)
    }
  }, [])

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
      startTimer()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  if (!track) return null

  const colorTrackBar = changeTrackStyling(duration, trackProgress)

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
      setTrackIndex(audioTracks.length - 1)
    } else {
      setTrackIndex(trackIndex - 1)
    }
  }

  const nextTrack = () => {
    if (trackIndex < audioTracks.length - 1) {
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
    const shuffleTracks = Object.assign([], audioTracks)
    shuffleTracks.sort(() => Math.random() - 0.5)
    console.log(shuffleTracks)

    setAudioTracks(shuffleTracks)
    audioRef.current.currentTime = 0
    setTrackIndex(0)
  }

  return (
    <div className={classes.bar}>
      <div className={classes.content}>
        <input
          className={cn(classes.playerProgress, classes.barProgress)}
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          style={{ background: `${colorTrackBar}` }}
        />
        <div className={classes.playerBlock}>
          <Controls
            title={track.title}
            author={track.author}
            isPlaying={isPlaying}
            onPlayPauseClick={setIsPlaying}
            onPrevClick={prevTrack}
            onNextClick={nextTrack}
            onRepeatTrack={repeatTrack}
            activeRepeat={activeRepeat}
            onShuffleTracks={shuffleTracks}
          />
          <Volume />
        </div>
      </div>
    </div>
  )
}

export default Player
