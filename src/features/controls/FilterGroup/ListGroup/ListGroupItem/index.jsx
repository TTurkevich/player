import cn from 'classnames'
import { useState } from 'react'
import classes from './index.module.css'

const ListGroupItem = ({
  children,
  id,
  value,
  handleClickOption,
  ...attrs
}) => {
  const [active, setActive] = useState(false)

  const handleClick = (value) => {
    setActive((prev) => !prev)
    handleClickOption(value)
  }

  return (
    <li
      id={id}
      value={value}
      onClick={() => {
        handleClick(value)
      }}
      className={
        active
          ? cn(classes.listGroupItem, classes.active)
          : classes.listGroupItem
      }
      {...attrs}
    >
      {children}
    </li>
  )
}

export default ListGroupItem
