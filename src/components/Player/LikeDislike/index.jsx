import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

import IconButton from '../IconButton'
import IconDisLike from '../../IconDisLike'
import IconLike from '../../IconLike'

import classes from './index.module.css'

import {
  addFavoriteById,
  loadTrackById,
  removeFavoriteById,
} from '../../../features/favorite/favorite-actions'
import {
  deleteTrackById,
  selectFavoriteTracks,
} from '../../../features/favorite/favorite-slice'

const LikeDislike = ({ id, disabled }) => {
  const dispatch = useDispatch()
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
  const remove = () => {
    dispatch(removeFavoriteById(id))
    dispatch(deleteTrackById(id))
  }
  return (
    <div className={classes.likeDis}>
      <IconButton
        buttonClassName={classes.like}
        Icon={IconLike}
        active={active}
        onClick={add}
        disabled={disabled}
      />
      <IconButton
        buttonClassName={classes.dislike}
        Icon={IconDisLike}
        onClick={remove}
        disabled={disabled}
      />
    </div>
  )
}

export default LikeDislike
