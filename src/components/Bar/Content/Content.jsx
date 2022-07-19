import classes from './Content.module.css'
import Progress from './Progress/Progress'
import Block from './Block/Block'

const Content = () => {
  return (
    <div className={classes.bar__content}>
      <Progress />
      <Block />
    </div>
  )
}

export default Content