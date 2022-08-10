import classes from './index.module.css'

const Modal = ({ isVisible = false, content }) => {
  return !isVisible ? null : (
    <div className={classes.modal}>
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
