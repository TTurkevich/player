import { useState, useEffect } from 'react'

import classes from './index.module.css'

import LikeDislike from '../LikeDislike'
import SkeletonTrackPlay from '../../Skeleton/SkeletonTrackPlay'
import Buttons from '../Buttons'
import TrackPlay from '../TrackPlay'

const Controls = ({
  title,
  author,
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
  onRepeatTrack,
  activeRepeat,
  onShuffleTracks,
}) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timing = setTimeout(() => {
      setLoading(false)
    }, 5000)
    return () => clearTimeout(timing)
  }, [])

  return (
    <div className={classes.player}>
      <Buttons
        isPlaying={isPlaying}
        onPlayPauseClick={onPlayPauseClick}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
        onRepeatTrack={onRepeatTrack}
        activeRepeat={activeRepeat}
        onShuffleTracks={onShuffleTracks}
      />
      <div className={classes.trackPlay}>
        {loading && <SkeletonTrackPlay />}
        {!loading && <TrackPlay title={title} author={author} />}
        <LikeDislike />
      </div>
    </div>
  )
}

export default Controls
