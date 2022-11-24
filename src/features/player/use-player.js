import { useSelector, useDispatch } from 'react-redux'

import { setId } from '../controls/controls-slice'
import { changeVisibilityPlayer, selectPlayer } from './player-slice'

export const usePlayer = () => {
  const dispatch = useDispatch()
  const { visibility } = useSelector(selectPlayer)

  const handleClick = (event) => {
    event.stopPropagation()
    if (visibility === false) {
      dispatch(changeVisibilityPlayer())
    }
    const id = Number(event.currentTarget.id)
    dispatch(setId(id))
  }

  return handleClick
}
