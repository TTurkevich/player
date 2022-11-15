import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
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
  const options = optionsFilter(tracks, name)
  const filters = {
    [name]: selectedValue,
  }

  const handleClick = () => {
    if (name !== 'year') setCounter(options.length - selectedValue.length)

    if (!selectedValue.length) {
      console.log('filter true опции не выбраны')
      state.active
        ? dispatchButton(openCloseFilter(''))
        : dispatchButton(openCloseFilter(classes.activeClass))
    }
    if (selectedValue.length && state.active === true) {
      console.log(
        'filter true кнопка активна и выбраны опции; оставляем активный класс, прячем модалку'
      )
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
      console.log('false filter')
      if (!selectedValue.length) {
        console.log('false', 'filter опции не выбраны')
        dispatchButton(modalVisible(''))
      }
      if (selectedValue.length) {
        console.log('false', 'filter опции выбраны')
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
    return setCounter(options.length - selectedValue.length)
  }, [selectedValue, counter])

  useEffect(() => {
    checkVisibleModal(visibleModal, selectedValue)
  }, [visibleModal])

  useEffect(() => {
    if (name === 'author')
      dispatch(setFilterAuthors(selectedValue.length ? filters : {}))
    if (name === 'genre')
      dispatch(setFilterGenres(selectedValue.length ? filters : {}))
    if (name === 'year') dispatch(setFilterYears(selectedValue))
    console.log('filters', filters)
  }, [filters, selectedValue])

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
