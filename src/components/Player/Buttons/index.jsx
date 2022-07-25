import classes from './Buttons.module.css'
import Prev from '../../icons/Prev'
import Play from '../../icons/Play'
import Next from '../../icons/Next'
import Repeat from '../../icons/Repeat'
import Shuffle from '../../icons/Shuffle'

const icons = [Prev, Play, Next, Repeat, Shuffle]

const addProps = [
  {
    classNameDiv: ['player__btn-prev'],
    classNameIcon: 'player__btn-prev-svg',
  },
  {
    classNameDiv: ['player__btn-play', '_btn'],
    classNameIcon: 'player__btn-play-svg',
  },
  {
    classNameDiv: ['player__btn-next'],
    classNameIcon: 'player__btn-next-svg',
  },
  {
    classNameDiv: ['player__btn-repeat', '_btn-icon'],
    classNameIcon: 'player__btn-repeat-svg',
  },
  {
    classNameDiv: ['player__btn-shuffle', '_btn-icon'],
    classNameIcon: 'player__btn-shuffle-svg',
  },
]

function getClass(arr) {
  return arr.map((item) => `${classes[item]}`).join(' ')
}

const Buttons = () => {
  return (
    <div className={classes.player__controls}>
      {icons.map((Icon) => (
        <div
          key={Icon.index}
          className={getClass(addProps[icons.indexOf(Icon)].classNameDiv)}
        >
          <Icon
            className={
              classes[`${addProps[icons.indexOf(Icon)].classNameIcon}`]
            }
          />
        </div>
      ))}
    </div>
  )
}

export default Buttons
