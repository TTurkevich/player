import classes from './index.module.css'
import Selections from '../Selections'

const Recommendations = () => {
  return (
    <div className={classes.block}>
      <div className={classes.list}>
        <Selections image={'img/playlist01.png'} alt="day's playlist" />
        <Selections image={'img/playlist02.png'} alt="dance" />
        <Selections image={'img/playlist03.png'} alt="energie" />
      </div>
    </div>
  )
}

export default Recommendations
