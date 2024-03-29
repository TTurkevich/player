import { useSelector, useDispatch } from 'react-redux'
import { setSearch, selectSearch } from '../controls/controls-slice'

export const useSearch = () => {
  const dispatch = useDispatch()
  const search = useSelector(selectSearch)

  const handleSearch = (event) => {
    dispatch(setSearch(event.target.value))
  }
  return [search, handleSearch]
}
