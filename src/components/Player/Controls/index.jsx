import classes from './index.module.css'
import Buttons from '../Buttons'
import TrackPlay from '../TrackPlay'
import { useState, useEffect } from 'react'
import trackPlayData from '../../server/trackPlayData'
import LikeDislike from '../LikeDislike'
import SkeletonTrackPlay from '../../Skeleton/SkeletonTrackPlay'

const Controls = () => {
  const [trackPlay, setTrackPlay] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timing = setTimeout(() => {
      setTrackPlay(trackPlayData)
      setLoading(false)
    }, 5000)
    return () => clearTimeout(timing)
  }, [])

  return (
    <div className={classes.player}>
      <Buttons />
      <div className={classes.trackPlay}>
        {loading && <SkeletonTrackPlay />}
        {!loading &&
          trackPlay.map((track, index) => {
            return <TrackPlay key={index} track={track} />
          })}
        <LikeDislike />
      </div>
    </div>
  )
}

export default Controls
