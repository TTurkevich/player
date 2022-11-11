import cn from 'classnames'
import { useState, useEffect } from 'react'
import FilterAuthor from './FilterAuthor'
import FilterGenre from './FilterGenre'
import FilterYear from './FilterYear'

import classes from './index.module.css'

const FilterGroup = ({ className }) => {
  const [visibleModal, setVisibleModal] = useState({
    author: false,
    genre: false,
    year: false,
  })
  const checkModalAuthor = () => {
    setVisibleModal({ author: true, genre: false, year: false })
    return visibleModal
  }
  const checkModalGenre = () => {
    setVisibleModal({ author: false, genre: true, year: false })
    return visibleModal
  }
  const checkModalYear = () => {
    setVisibleModal({ author: false, genre: false, year: true })
    return visibleModal
  }

  useEffect(() => {
    console.log('FG', visibleModal)
  }, [visibleModal])

  return (
    <div className={cn(classes.filter, className)}>
      <div className={classes.title}>Искать по:</div>
      <FilterAuthor
        visibleModal={visibleModal.author}
        checkModal={checkModalAuthor}
      />
      <FilterGenre
        visibleModal={visibleModal.genre}
        checkModal={checkModalGenre}
      />
      <FilterYear
        visibleModal={visibleModal.year}
        checkModal={checkModalYear}
        //is
      />
    </div>
  )
}

export default FilterGroup
