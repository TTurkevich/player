import classes from './Author.module.css'

const Author = (props) => {
  return (
    <div className={classes.track__author}>
      <a className={classes['track__author-link']} href="http://">
        {props.author}
      </a>
    </div>
  )
}

export default Author
