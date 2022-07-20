import classes from './Volume.module.css'
import Image from './Image/Image'
import Progress from './Progress/Progress'


const Volume = () => {
    return (
      <div className={`${classes['bar__volume-block']} ${classes.volume}`}>
        <div className={classes.volume__content}>
      <Image />
      <Progress />
        </div>
      </div>
    )
  }
  
  export default Volume