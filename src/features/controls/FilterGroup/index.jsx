import cn from 'classnames'
import { useState, useEffect } from 'react'
import FilterAuthor from './FilterAuthor'
import FilterGenre from './FilterGenre'
import FilterYear from './FilterYear'

import classes from './index.module.css'

const FilterGroup = ({ className }) => {
  const [visibleModal, setVisibleModal] = useState(false)
  const checkModalAuthor = () => {
    setVisibleModal('author')
    return visibleModal
  }
  const checkModalGenre = () => {
    setVisibleModal('genre')
    return visibleModal
  }
  const checkModalYear = () => {
    setVisibleModal('year')
    return visibleModal
  }

  useEffect(() => {
    console.log('FG', visibleModal)
  }, [visibleModal])

  return (
    <div className={cn(classes.filter, className)}>
      <div className={classes.title}>Искать по:</div>
      <FilterAuthor visibleModal={visibleModal} checkModal={checkModalAuthor} />
      <FilterGenre visibleModal={visibleModal} checkModal={checkModalGenre} />
      <FilterYear visibleModal={visibleModal} checkModal={checkModalYear} />
    </div>
  )
}

export default FilterGroup
