import classes from './index.module.css'
import cn from 'classnames'

import { useTheme } from '../../context/Theme/ThemeProvider'

const Modal = ({ isVisible = false, content }) => {
  const { theme } = useTheme()

  return !isVisible ? null : (
    <div className={cn(classes.modal, classes[`${theme}`])}>
      <div className={classes.modalContent}>
        {content.map((item, index) => (
          <a key={index} href="#">
            {item}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Modal
