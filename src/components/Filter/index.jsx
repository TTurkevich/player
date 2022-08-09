import classes from './index.module.css'
import FilterButton from '../FilterButton'
import { useState } from 'react'
import Modal from '../Modal'
import filterButtonData from '../server/filterButtonData'

const Filter = () => {
  const [active, setActive] = useState('')
  const [isModal, setModal] = useState(false)
  const [filter, setFilter] = useState([])

  const FilterData = (value) =>
  filterButtonData.find((button) => button.type === `${value}`).filterItems

  const handleClick = (value) => {
    if (value !== active) {
      setActive(value)
      setModal(true)
      setFilter(FilterData(value))
    } else {
      setActive('')
      setModal(false)
    }
  }

  return (
    <div className={classes.filter}>
      <div className={classes.title}>Искать по:</div>
      {filterButtonData.map((item) => (
        <FilterButton
          onChange={handleClick}
          activeBtn={active}
          key={item.id}
          dataId={item.type}
          text={item.filter}
        />
      ))}
      <Modal isVisible={isModal} content={filter} />
    </div>
  )
}

export default Filter
