import classes from './index.module.css'

const Personal = () => {
  return (
    <div className={classes.sidebar__personal}>
      <p className={classes.name}>Sergey.Ivanov</p>
      <div className={classes.avatar}></div>
    </div>
  )
}

export default Personal
