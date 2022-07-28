import classes from './index.module.css'

const Selections = (props) => {
  return (
    <div className={classes.sidebar__item}>
      <a className={classes.sidebar__link} href="#">
        <img
          className={classes.sidebar__img}
          src={props.image} 
          alt={props.alt}
        />
      </a>
    </div>
  )
}

export default Selections
