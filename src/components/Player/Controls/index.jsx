import { useState, useEffect } from 'react'

import classes from './index.module.css'

import LikeDislike from '../LikeDislike'
import SkeletonTrackPlay from '../../Skeleton/SkeletonTrackPlay'
import Buttons from '../Buttons'
import TrackPlay from '../TrackPlay'
import trackPlayData from '../../../server/trackPlayData'

const Controls = ({ playingBtn, reference, onChange }) => {
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
      <Buttons onChange={onChange} playingBtn={playingBtn} />
      <div className={classes.trackPlay}>
        {loading && <SkeletonTrackPlay />}
        {!loading &&
          trackPlay.map((track, index) => {
            return <TrackPlay key={index} track={track} reference={reference} />
          })}
        <LikeDislike />
      </div>
    </div>
  )
}

export default Controls
