import classes from './index.module.css'
import cn from 'classnames'
import GlobalSvgSelector from '../GlobalSvg'

const Search = () => {
  return (
    <div className={cn(classes.centerblock__search, classes.search)}>
      <GlobalSvgSelector id="Search" iconClassName={classes['search__svg']} />
      <input
        className={classes.search__text}
        type="search"
        placeholder="Поиск"
        name="search"
      ></input>
    </div>
  )
}

export default Search
