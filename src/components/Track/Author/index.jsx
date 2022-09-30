import classes from './index.module.css'

const Author = ({ title }) => {
  return (
    <div className={classes.author}>
      <a className={classes.link} href="#">
        {title}
      </a>
    </div>
  )
}

export default Author
