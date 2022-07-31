import classes from './index.module.css'
import cn from 'classnames'

const Filter = () => {
  return (
    <div className={classes.filter}>
      <div className={classes.title}>Искать по:</div>
      <div className={cn(classes.button, classes.btnText)}>исполнителю</div>
      <div className={cn(classes.button, classes.btnText)}>году выпуска</div>
      <div className={cn(classes.button, classes.btnText)}>жанру</div>
    </div>
  )
}

export default Filter
