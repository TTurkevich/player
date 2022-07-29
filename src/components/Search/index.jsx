import classes from './index.module.css'
import cn from 'classnames'
import Glass from '../Svg/Glass'

const Search = () => {
  return (
    <div className={cn(classes.centerblock__search, classes.search)}>
      <Glass iconClassName={classes.svg} />
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
