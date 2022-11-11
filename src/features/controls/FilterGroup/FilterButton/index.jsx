import cn from 'classnames'
import classes from './index.module.css'

import { useTheme } from '../../../../context/Theme/ThemeProvider'

const FilterButton = ({
  onChange,
  className,
  dataId,
  nameFilter,
  children,
  active,
  disabled,
  ...attrs
}) => {
  const { theme } = useTheme()

  const onClickAction = (e) => {
    if (disabled) {
      e.preventDefault()
    } else {
      return onChange(e)
    }
  }

  const styles = cn(classes.button, classes[theme], className, { active })

  return (
    <div className={classes.container}>
      <div
        data-id={dataId}
        className={styles}
        onClick={onClickAction}
        disabled={disabled}
        {...attrs}
      >
        {nameFilter}
      </div>
      {children}
    </div>
  )
}

export default FilterButton
