import classes from './index.module.css'

const Author = ({ title, id }) => {
  return (
    <div className={classes.author}>
      <a className={classes.link} id={id} href="#">
        {title}
      </a>
    </div>
  )
}

export default Author
