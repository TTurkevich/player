import classes from './Recommendations.module.css'
import Selections from './Selections/Selections'

const Recommendations = () => {
  return (
    <div className={classes.sidebar__block}>
      <div className={classes.sidebar__list}>
        <Selections
          image={process.env.PUBLIC_URL + 'img/playlist01.png'}
          alt={"day's playlist"}
        />
        <Selections
          image={process.env.PUBLIC_URL + 'img/playlist02.png'}
          alt={"day's playlist"}
        />
        <Selections
          image={process.env.PUBLIC_URL + 'img/playlist03.png'}
          alt={"day's playlist"}
        />
      </div>
    </div>
  )
}

export default Recommendations
