import classes from './index.module.css'
import Prev from '../../Svg/Prev'
import Play from '../../Svg/Play'
import Next from '../../Svg/Next'
import Repeat from '../../Svg/Repeat'
import Shuffle from '../../Svg/Shuffle'

const icons = [
  {
    key: 1,
    name: Prev,
    wrapperClassName: ['player__btn-prev', '_btn', '_btn-icon'],
    iconClassName: 'player__btn-prev-svg',
  },
  {
    key: 2,
    name: Play,
    wrapperClassName: ['player__btn-play', '_btn', '_btn-icon'],
    iconClassName: 'player__btn-play-svg',
  },
  {
    key: 3,
    name: Next,
    wrapperClassName: ['player__btn-next', '_btn', '_btn-icon'],
    iconClassName: 'player__btn-next-svg',
  },
  {
    key: 4,
    name: Repeat,
    wrapperClassName: ['player__btn-repeat', '_btn', '_btn-icon'],
    iconClassName: 'player__btn-repeat-svg',
  },
  {
    key: 5,
    name: Shuffle,
    wrapperClassName: ['player__btn-shuffle', '_btn', '_btn-icon'],
    iconClassName: 'player__btn-shuffle-svg',
  },
]

const Buttons = () => {
  return (
    <div className={classes.player__controls}>
      {icons.map((icon) => (
        <div
          key={icon.key}
          className={icon.wrapperClassName
            .map((item) => `${classes[item]}`)
            .join(' ')}
        >
          <icon.name iconClassName={classes[`${icon.iconClassName}`]} />
        </div>
      ))}
    </div>
  )
}

export default Buttons
