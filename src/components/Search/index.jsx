import classes from './index.module.css'
import cn from 'classnames'

import { useTheme } from '../../context/Theme/ThemeProvider'

import IconSearch from '../Icons/IconSearch'

const Search = ({ className }) => {
  const { theme } = useTheme()
  return (
    <div className={cn(className, classes.search, classes[theme])}>
      <IconSearch className={cn(classes.icon, classes[theme])} />
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
