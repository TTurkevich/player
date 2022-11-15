import cn from 'classnames'
import { useState, useEffect } from 'react'

import FilterSelect from './FilterSelect'

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
      <FilterSelect
        name="author"
        visibleModal={visibleModal}
        checkModal={checkModalAuthor}
      />
      <FilterSelect
        name="genre"
        visibleModal={visibleModal}
        checkModal={checkModalGenre}
      />
      <FilterSelect
        name="year"
        visibleModal={visibleModal}
        checkModal={checkModalYear}
      />
    </div>
  )
}

export default FilterGroup
