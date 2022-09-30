import { useState, useEffect } from 'react'

import classes from './index.module.css'

import SkeletonPlaylist from '../Skeleton/SkeletonPlaylist'
import Track from '../Track'
import trackData from '../../server/tracks'

const Playlist = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timing = setTimeout(() => {
      setList(trackData)
      setLoading(false)
    }, 5000)
    return () => clearTimeout(timing)
  }, [])

  return (
    <div className={classes.playlist}>
      {loading && <SkeletonPlaylist />}
      {!loading &&
        list.map((track, index) => (
          <Track
            key={index}
            title={track.title}
            clarification={track.clarification}
            album={track.album}
            author={track.author}
            time={track.time}
          />
        ))}
    </div>
  )
}

export default Playlist
