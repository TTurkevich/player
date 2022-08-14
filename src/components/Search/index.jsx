import classes from './index.module.css'
import cn from 'classnames'

import IconSearch from '../Icons/IconSearch'

const Search = ({className}) => {
  return (
    <div className={cn(className, classes.search)}>
      <IconSearch className={classes.icon} />
      <input
        className={classes.text}
        type="search"
        placeholder="Поиск"
        name="search"
      ></input>
    </div>
  )
}

export default Search
