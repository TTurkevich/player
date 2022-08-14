import { useState, useEffect } from 'react'

import classes from './index.module.css'

import SkeletonPlaylist from '../Skeleton/SkeletonPlaylist'
import Track from '../Track'
import trackData from '../../server/trackData'


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
        list.map((track, index) => {
          return <Track key={index} track={track} />
        })}
    </div>
  )
}

export default Playlist
