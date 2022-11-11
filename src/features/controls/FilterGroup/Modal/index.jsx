import classes from './index.module.css'
import cn from 'classnames'

import { useTheme } from '../../../../context/Theme/ThemeProvider'

import ListGroup from '../ListGroup/ListGroup'
import ListGroupItem from '../ListGroup/ListGroupItem'
import RadioButton from '../RadioButton'

const Modal = ({
  isVisible = false,
  content,
  modalClassName,
  handleClickOption,
  isRadio,
}) => {
  const { theme } = useTheme()

  return !isVisible ? null : (
    <div className={cn(classes.modal, classes[theme], modalClassName)}>
      {isRadio ? (
        <RadioButton handleClickOption={handleClickOption} />
      ) : (
        <ListGroup>
          {content?.map((item, index) => (
            <ListGroupItem
              handleClickOption={handleClickOption}
              key={index}
              id={index}
              value={item}
            >
              {item}
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </div>
  )
}

export default Modal
