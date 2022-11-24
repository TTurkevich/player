import classes from './index.module.css'
import cn from 'classnames'

import { useTheme } from '../../../context/Theme/ThemeProvider'

import IconSearch from '../../../components/Icons/IconSearch'
import { useSearch } from '../use-search'

const Search = ({ className }) => {
  const { theme } = useTheme()
  const [search, handleSearch] = useSearch()

  return (
    <div className={cn(className, classes.search, classes[theme])}>
      <IconSearch className={cn(classes.icon, classes[theme])} />
      <input
        className={classes.text}
        type="search"
        placeholder="Поиск"
        name="search"
        value={search}
        onChange={handleSearch}
      ></input>
    </div>
  )
}

export default Search
