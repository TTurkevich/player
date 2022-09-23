import cn from 'classnames'
import classes from './index.module.css'

import { useTheme } from '../../context/Theme/ThemeProvider'

const FilterButton = ({ onChange, activeBtn, dataId, text }) => {
  const { theme } = useTheme()
  const clickHandler = (keyID) => onChange(keyID)

  return (
    <div
      data-id={dataId}
      className={
        activeBtn === dataId
          ? cn(classes.button, classes[`${theme}`], classes.activeClass)
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
