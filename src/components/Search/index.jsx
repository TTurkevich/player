import classes from './index.module.css'
import IconSearch from '../Svg/IconSearch'

const Search = () => {
  return (
    <div className={classes.search}>
      <IconSearch className={classes.svg} />
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
