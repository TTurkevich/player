import classes from './index.module.css'
import cn  from 'classnames'

const Filter = () => {
  return (
    <div className={classes.filter}>
      <div className={classes.title}>Искать по:</div>
      <div
        className={cn(classes.button, classes['button-author'], classes['_btn-text'])}
      >
        исполнителю
      </div>
      <div
        className={cn(classes.button, classes['button-year'], classes['_btn-text'])}
      >
        году выпуска
      </div>
      <div
        className={cn(classes.button, classes['button-genre'], classes['_btn-text'])}
      >
        жанру
      </div>
    </div>
  )
}

export default Filter
