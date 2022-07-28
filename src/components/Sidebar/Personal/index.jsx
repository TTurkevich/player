import classes from './index.module.css'

const Personal = () => {
  return (
    <div className={classes.sidebar__personal}>
      <p className={classes['sidebar__personal-name']}>Sergey.Ivanov</p>
      <div className={classes.sidebar__avatar}></div>
    </div>
  )
}

export default Personal
