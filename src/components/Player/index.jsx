import { useState, useEffect, useRef } from 'react'

import classes from './index.module.css'

import Controls from './Controls'
import Volume from './Volume'

function useInterval(callback, delay) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }

    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

const Player = () => {
  const [playing, setPlaying] = useState(null)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef(null)

  const togglePlaying = () => setPlaying((prev) => !prev)

  useEffect(() => {
    if (audioRef && audioRef.current) {
      if (playing) audioRef.current.play()
      else audioRef.current.pause()
    }
  }, [playing])

  useInterval(() => {
    if (audioRef && audioRef.current) {
      const { currentTime, duration } = audioRef.current
      setProgress(Math.ceil((currentTime * 100) / duration))
    }
  })

  return (
    <div className={classes.bar}>
      <div className={classes.content}>
        <div
          className={classes.playerProgress}
          style={{ width: `${progress}%` }}
        ></div>
        <div className={classes.playerBlock}>
          <Controls
            reference={audioRef}
            onChange={togglePlaying}
            playingBtn={playing}
          />
          <Volume />
        </div>
      </div>
    </div>
  )
}

export default Player
