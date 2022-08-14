import { useState, useEffect } from 'react'

import classes from './index.module.css'

import Selections from '../Selections'
import SkeletonRecommendations from '../../Skeleton/SkeletonRecommendations'
import selectionsData from '../../../server/selectionsData'

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timing = setTimeout(() => {
      setRecommendations(selectionsData)
      setLoading(false)
    }, 5000)
    return () => clearTimeout(timing)
  }, [])

  return (
    <div className={classes.block}>
      {loading && <SkeletonRecommendations />}
      {!loading &&
        recommendations.map((selection, index) => {
          return <Selections key={index} selection={selection} />
        })}
    </div>
  )
}

export default Recommendations
