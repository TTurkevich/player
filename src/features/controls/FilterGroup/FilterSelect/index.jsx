import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  selectSearch,
  setFilterAuthors,
  setFilterGenres,
  setFilterYears,
} from '../../controls-slice'
import { selectAllTracks } from '../../../tracks/tracks-slice'
import Filter from '../Filter'

import classes from './index.module.css'
import { nameButton, optionsFilter } from '../helpers'
import { useReducer } from 'react'
import {
  buttonReducer,
  initialState,
  modalInvisible,
  modalVisible,
  openCloseFilter,
  openCloseModal,
} from './use-reducer'

const FilterSelect = ({ name, visibleModal, checkModal }) => {
  const dispatch = useDispatch()
  const [state, dispatchButton] = useReducer(buttonReducer, initialState)
  const nameFilter = nameButton(name)
  const [selectedValue, setSelectedValue] = useState([])
  const [isRadio] = useState(false)
  const [counter, setCounter] = useState(0)

  const tracks = useSelector(selectAllTracks)
  const search = useSelector(selectSearch)

  const options = optionsFilter(tracks, name)
  const filters = {
    [name]: selectedValue,
  }

  const handleClick = () => {
    if (name !== 'year') setCounter(options.length - selectedValue.length)

    if (!selectedValue.length) {
      state.active
        ? dispatchButton(openCloseFilter(''))
        : dispatchButton(openCloseFilter(classes.activeClass))
    }
    if (selectedValue.length && state.active === true) {
      const modalClassName =
        state.modalClassName === classes.invisible ? '' : classes.invisible
      dispatchButton(
        openCloseModal({ className: classes.activeClass, modalClassName })
      )
    }
    checkModal()
  }

  const handleClickOption = (value) => {
    if (name !== 'year') {
      const copy = [...selectedValue]

      if (selectedValue.includes(value)) {
        const index = copy.indexOf(value)
        copy.splice(index, 1)
        setSelectedValue(copy)
      } else {
        setSelectedValue([...selectedValue, value])
      }
      return selectedValue
    } else return setSelectedValue(value)
  }

  const checkVisibleModal = (visibleModal, selectedValue) => {
    if (visibleModal !== name || visibleModal === false) {
      if (!selectedValue.length) {
        dispatchButton(modalVisible(''))
      }
      if (selectedValue.length) {
        dispatchButton(
          modalInvisible({
            className: classes.activeClass,
            modalClassName: classes.invisible,
          })
        )
      }
    }
  }

  useEffect(() => {
    const difference = options.length - selectedValue.length
    if (difference === 0 || difference < 0) return setCounter(null)
    else return setCounter(difference)
  }, [selectedValue, counter, search])

  useEffect(() => {
    checkVisibleModal(visibleModal, selectedValue)
  }, [visibleModal])

  useEffect(() => {
    if (name === 'author')
      dispatch(setFilterAuthors(selectedValue.length ? filters : {}))
    if (name === 'genre')
      dispatch(setFilterGenres(selectedValue.length ? filters : {}))
    if (name === 'year') dispatch(setFilterYears(selectedValue))
  }, [selectedValue, search])

  return (
    <Filter
      nameFilter={nameFilter}
      content={options}
      onChange={handleClick}
      active={state.active}
      className={state.className}
      isVisible={state.isModal}
      modalClassName={state.modalClassName}
      handleClickOption={handleClickOption}
      isRadio={name === 'year' ? !isRadio : null}
      counter={name !== 'year' ? counter : null}
    />
  )
}

export default FilterSelect
