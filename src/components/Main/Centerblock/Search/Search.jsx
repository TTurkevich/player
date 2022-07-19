import classes from './Search.module.css'

const Search = () => {
  return (
    <div className={`${classes.centerblock__search} ${classes.search}`}>
      <svg className={classes.search__svg}>
        <use
          xlinkHref={
            process.env.PUBLIC_URL + '/img/icon/sprite.svg#icon-search'
          }
        ></use>
      </svg>
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
