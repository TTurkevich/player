import classes from './Author.module.css'

const Author = () => {
  return (
    <div className={classes['track-play__author']}>
      <a className={classes['track-play__author-link']} href="http://">
        Ты та...
      </a>
    </div>
  )
}

export default Author
