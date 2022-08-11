import cn from 'classnames'
import classes from './index.module.css'

const FilterButton = ({ onChange, activeBtn, dataId, text }) => {
  const clickHandler = (keyID) => onChange(keyID)

  return (
    <div
      data-id={dataId}
      className={
        activeBtn === dataId
          ? cn(classes.button, classes.activeClass)
          : classes.button
      }
      onClick={() => {
        clickHandler(dataId)
      }}
    >
      {text}
    </div>
  )
}

export default FilterButton
