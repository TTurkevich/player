import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setFilterGenres } from '../../controls-slice'
import { selectAllTracks } from '../../../tracks/tracks-slice'
import Filter from '../Filter'

import classes from './index.module.css'

const optionsFilter = (content, filter) => {
  const data = content?.map((item) => item[filter])
  const options = [...new Set(data)]
  return options
}

const FilterGenre = ({ visibleModal, checkModal }) => {
  const dispatch = useDispatch()
  const [selectedValue, setSelectedValue] = useState([])
  const [counter, setCounter] = useState(0)
  const [button, setButton] = useState({
    active: false,
    className: '',
    isModal: false,
    modalClassName: '',
  })
  const { active, className, isModal, modalClassName } = button

  const tracks = useSelector(selectAllTracks)
  const genres = optionsFilter(tracks, 'genre')

  const filters = {
    genre: selectedValue,
  }

  const handleClick = () => {
    setCounter(genres.length - selectedValue.length)
    if (selectedValue.length === 0) {
      console.log('gen true опции не выбраны')
      active === true
        ? setButton({
            active: false,
            className: '',
            isModal: false,
            modalClassName: '',
          })
        : setButton({
            active: true,
            className: classes.activeClass,
            isModal: true,
            modalClassName: '',
          })
    }
    if (selectedValue.length !== 0 && active === true) {
      console.log(
        'gen true кнопка активна и выбраны опции; оставляем активный класс, прячем модалку'
      )
      setButton({
        active: true,
        className: classes.activeClass,
        isModal: true,
        modalClassName: classes.invisible,
      })
      if (modalClassName === classes.invisible) {
        console.log('gen true упс, окошко не видно, надо исправить')
        setButton({
          active: true,
          className: classes.activeClass,
          isModal: true,
          modalClassName: '',
        })
      }
    }
    checkModal()
  }

  const handleClickOption = (value) => {
    const copy = Object.assign([], selectedValue)

    if (selectedValue.includes(value)) {
      const index = copy.indexOf(value)
      copy.splice(index, 1)
      setSelectedValue(copy)
      return selectedValue
    } else {
      setSelectedValue([...selectedValue, value])
      return selectedValue
    }
  }

  const checkVisibleModal = (visibleModal, selectedValue) => {
    if (visibleModal !== 'genre' || visibleModal === false) {
      console.log('false gen')
      if (selectedValue.length === 0) {
        console.log('false', 'gen опции не выбраны')
        setButton({
          active: false,
          className: '',
          isModal: false,
          modalClassName: '',
        })
        return button
      }
      if (selectedValue.length !== 0) {
        console.log('false', 'gen опции выбраны')
        setButton({
          active: true,
          className: classes.activeClass,
          isModal: true,
          modalClassName: classes.invisible,
        })
        return button
      }
    }
  }

  useEffect(() => {
    return setCounter(genres.length - selectedValue.length)
  }, [selectedValue, counter])

  useEffect(() => {
    checkVisibleModal(visibleModal, selectedValue)
  }, [visibleModal])

  useEffect(() => {
    if (selectedValue.length !== 0) {
      dispatch(setFilterGenres(filters))
      console.log('filters', filters)
    } else dispatch(setFilterGenres({}))
  }, [filters, selectedValue])

  return (
    <Filter
      nameFilter={'жанру'}
      content={genres}
      onChange={handleClick}
      active={active}
      className={className}
      isVisible={isModal}
      modalClassName={modalClassName}
      handleClickOption={handleClickOption}
      counter={counter}
    />
  )
}

export default FilterGenre
