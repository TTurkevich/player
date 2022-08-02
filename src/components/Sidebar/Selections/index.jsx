import classes from './index.module.css'

const Selections = (props) => {
  return (
    <div className={classes.item}>
      <a className={classes.link} href="#">
        <img className={classes.img} src={props.image} alt={props.alt} />
      </a>
    </div>
  )
}

export default Selections
