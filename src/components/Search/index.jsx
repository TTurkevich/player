import classes from './index.module.css'
import cn from 'classnames'

import IconSearch from '../Icons/IconSearch'

const Search = ({searchBlock}) => {
  return (
    <div className={cn(searchBlock, classes.search)}>
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
