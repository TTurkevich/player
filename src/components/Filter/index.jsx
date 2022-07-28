import classes from './index.module.css'
import cn  from 'classnames'

const Filter = () => {
  return (
    <div className={cn(classes.centerblock__filter, classes.filter)}>
      <div className={classes.filter__title}>Искать по:</div>
      <div
        className={cn(classes.filter__button, classes['button-author'], classes['_btn-text'])}
      >
        исполнителю
      </div>
      <div
        className={cn(classes.filter__button, classes['button-year'], classes['_btn-text'])}
      >
        году выпуска
      </div>
      <div
        className={cn(classes.filter__button, classes['button-genre'], classes['_btn-text'])}
      >
        жанру
      </div>
    </div>
  )
}

export default Filter
