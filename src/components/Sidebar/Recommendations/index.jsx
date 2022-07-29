import classes from './index.module.css'
import Selections from '../Selections'

const Recommendations = () => {
  return (
    <div className={classes.block}>
      <div className={classes.list}>
        <Selections
          image={process.env.PUBLIC_URL + 'img/playlist01.png'}
          alt="day's playlist"
        />
        <Selections
          image={process.env.PUBLIC_URL + 'img/playlist02.png'}
          alt="dance"
        />
        <Selections
          image={process.env.PUBLIC_URL + 'img/playlist03.png'}
          alt="energie"
        />
      </div>
    </div>
  )
}

export default Recommendations
