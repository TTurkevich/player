import classes from './index.module.css'
import cn from 'classnames'

const FilterButton = (props) => {
  const clickHandler = (keyID) => {
    props.onChange(keyID)
  }

  return (
    <div
      data-id={props.dataId}
      className={
        props.activeBtn === props.dataId
          ? cn(classes.button, classes.activeClass)
          : classes.button
      }
      onClick={() => {
        clickHandler(props.dataId)
      }}
    >
      {props.text}
    </div>
  )
}

export default FilterButton
