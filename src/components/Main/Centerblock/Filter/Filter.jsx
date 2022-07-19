import classes from './Filter.module.css'

const Filter = () => {
  return (
    <div className={`${classes.centerblock__filter} ${classes.filter}`}>
      <div className={classes.filter__title}>Искать по:</div>
      <div
        className={`${classes.filter__button} ${classes['button-author']} ${classes['_btn-text']}`}
      >
        исполнителю
      </div>
      <div
        className={`${classes.filter__button} ${classes['button-year']} ${classes['_btn-text']}`}
      >
        году выпуска
      </div>
      <div
        className={`${classes.filter__button} ${classes['button-genre']} ${classes['_btn-text']}`}
      >
        жанру
      </div>
    </div>
  )
}

export default Filter
