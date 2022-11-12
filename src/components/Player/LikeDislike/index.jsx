import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

import IconButton from '../IconButton'
import IconDisLike from '../../IconDisLike'
import IconLike from '../../IconLike'

import classes from './index.module.css'

import {
  addFavoriteById,
  removeFavoriteById,
} from '../../../features/favorite/favorite-actions'
import { selectFavoriteId } from '../../../features/favorite/favorite-slice'

const LikeDislike = ({ id }) => {
  const dispatch = useDispatch()
  const [active, setActive] = useState(false)

  const favorite = useSelector(selectFavoriteId)

  useEffect(() => {
    setActive(favorite.includes(id))
  }, [favorite])

  const add = () => {
    dispatch(addFavoriteById(Number(id)))
    setActive(true)
  }
  const remove = () => {
    dispatch(removeFavoriteById(Number(id)))
    setActive(false)
  }
  return (
    <div className={classes.likeDis}>
      <IconButton
        buttonClassName={classes.like}
        Icon={IconLike}
        active={active}
        onClick={add}
      />
      <IconButton
        buttonClassName={classes.dislike}
        Icon={IconDisLike}
        onClick={remove}
      />
    </div>
  )
}

export default LikeDislike
