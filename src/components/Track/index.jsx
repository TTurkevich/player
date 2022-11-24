import { useDispatch, useSelector } from 'react-redux'

import Author from './Author'
import Album from './Album'
import Time from './Time'
import Title from './Title'

import { usePlayer } from '../../features/player/use-player'
import {
  addFavoriteById,
  loadTrackById,
} from '../../features/favorite/favorite-actions'
import { useEffect, useState } from 'react'
import { selectFavoriteTracks } from '../../features/favorite/favorite-slice'

import classes from './index.module.css'

const Track = ({ id, title, album, author, time, clarification }) => {
  const dispatch = useDispatch()
  const handleClick = usePlayer()
  const [active, setActive] = useState(false)

  const favorite = useSelector(selectFavoriteTracks)

  useEffect(() => {
    if (favorite.length !== 0) {
      const search = favorite.some((track) => track.id === id)
      setActive(search)
    } else setActive(false)
  }, [favorite, id, active])

  const add = () => {
    dispatch(addFavoriteById(id))
    dispatch(loadTrackById(id))
  }

  return (
    <div className={classes.item}>
      <div
        className={classes.track}
        id={id}
        onClick={(event) => handleClick(event)}
      >
        <Title title={title} clarification={clarification} />
        <Author title={author} />
        <Album title={album} />
      </div>
      <Time time={time} onClick={add} active={active} />
    </div>
  )
}

export default Track
