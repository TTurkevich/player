import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setFilterYears } from '../../controls-slice'
import Filter from '../Filter'

import classes from './index.module.css'

const FilterYear = ({ visibleModal, checkModal }) => {
  const dispatch = useDispatch()
  const [isRadio] = useState(false)
  const [radioValue, setRadioValue] = useState('')
  const [button, setButton] = useState({
    active: false,
    className: '',
    isModal: false,
    modalClassName: '',
  })
  const { active, className, isModal, modalClassName } = button

  const handleClick = () => {
    if (radioValue.length === 0) {
      console.log('опции не выбраны')
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

    if (radioValue.length !== 0 && active === true) {
      console.log(
        'кнопка активна и выбраны опции; оставляем активный класс, прячем модалку'
      )
      setButton({
        active: true,
        className: classes.activeClass,
        isModal: true,
        modalClassName: classes.invisible,
      })
      if (modalClassName === classes.invisible) {
        console.log('упс, окошко не видно, надо исправить')
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
    setRadioValue(value)

    return setRadioValue
  }

  const checkVisibleModal = (visibleModal, radioValue) => {
    if (visibleModal !== 'year' || visibleModal === false) {
      console.log('false aut')
      if (radioValue.length === 0) {
        console.log('false', 'aut опции не выбраны')
        setButton({
          active: false,
          className: '',
          isModal: false,
          modalClassName: '',
        })
        return button
      }
      if (radioValue.length !== 0) {
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
    checkVisibleModal(visibleModal, radioValue)
  }, [visibleModal])

  useEffect(() => {
    if (radioValue !== '') {
      console.log('filters', radioValue)
      dispatch(setFilterYears(radioValue))
    }
  }, [radioValue])

  return (
    <Filter
      nameFilter={'году выпуска'}
      isRadio={!isRadio}
      onChange={handleClick}
      active={active}
      className={className}
      isVisible={isModal}
      modalClassName={modalClassName}
      handleClickOption={handleClickOption}
    />
  )
}

export default FilterYear
