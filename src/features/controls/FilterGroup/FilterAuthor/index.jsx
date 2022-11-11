import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setFilterAuthors } from '../../controls-slice'
import { selectAllTracks } from '../../../tracks/tracks-slice'
import Filter from '../Filter'

import classes from './index.module.css'

const optionsFilter = (content, filter) => {
  const data = content?.map((item) => item[filter])
  const options = [...new Set(data)]
  return options
}

const FilterAuthor = ({ visibleModal, checkModal }) => {
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
  const authors = optionsFilter(tracks, 'author')

  const filters = {
    author: selectedValue,
  }

  const handleClick = () => {
    setCounter(authors.length - selectedValue.length)
    if (selectedValue.length === 0) {
      console.log('aut true опции не выбраны')
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
        'aut true кнопка активна и выбраны опции; оставляем активный класс, прячем модалку'
      )
      setButton({
        active: true,
        className: classes.activeClass,
        isModal: true,
        modalClassName: classes.invisible,
      })
      if (modalClassName === classes.invisible) {
        console.log('aut true упс, окошко не видно, надо исправить')
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
    if (visibleModal === false) {
      console.log('false aut')
      if (selectedValue.length === 0) {
        console.log('false', 'aut опции не выбраны')
        setButton({
          active: false,
          className: '',
          isModal: false,
          modalClassName: '',
        })
        return button
      }
      if (selectedValue.length !== 0) {
        console.log('false', 'aut опции выбраны')
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
    return setCounter(authors.length - selectedValue.length)
  }, [selectedValue, counter])

  useEffect(() => {
    checkVisibleModal(visibleModal, selectedValue)
  }, [visibleModal])

  useEffect(() => {
    if (selectedValue.length !== 0) {
      dispatch(setFilterAuthors(filters))
      console.log('filters', filters)
    } else dispatch(setFilterAuthors({}))
  }, [filters, selectedValue])

  return (
    <Filter
      nameFilter={'исполнителю'}
      content={authors}
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

export default FilterAuthor
