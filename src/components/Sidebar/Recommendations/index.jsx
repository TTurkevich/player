import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import SkeletonRecommendations from '../../Skeleton/SkeletonRecommendations'
import SELECTIONS_IMAGES from '../../../data/SELECTIONS_IMAGES'

import { selectTracksInfo } from '../../../features/tracks/tracks-slice'
import { removePlayer } from '../../../features/player/player-slice'
import { loadSelectionById } from '../../../features/selection/selection-actions'
import { useCleanUp } from '../../../features/controls/use-cleanup'

import classes from './index.module.css'

const Recommendations = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cleanUp = useCleanUp()
  const { status } = useSelector(selectTracksInfo)

  const handleClick = (name, id) => {
    cleanUp()
    dispatch(removePlayer())
    navigate(`/selections/${name}`)
    dispatch(loadSelectionById(id))
  }

  return (
    <div className={classes.block}>
      {status === 'loading' && <SkeletonRecommendations />}
      {status === 'received' &&
        SELECTIONS_IMAGES.map((image, index) => {
          return (
            <div key={index} className={classes.item}>
              <img
                id={image.id}
                className={classes.img}
                name={image.name}
                src={image.image}
                alt={image.alt}
                onClick={() => handleClick(image.name, image.id)}
              />
            </div>
          )
        })}
    </div>
  )
}

export default Recommendations
