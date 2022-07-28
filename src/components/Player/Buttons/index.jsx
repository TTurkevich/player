import classes from './index.module.css'
import GlobalSvgSelector from '../../GlobalSvg'

const icons = [
  {
    key: 1,
    id: 'Prev',
    wrapperClassName: ['player__btn-prev'],
    iconClassName: 'player__btn-prev-svg',
  },
  {
    key: 2,
    id: 'Play',
    wrapperClassName: ['player__btn-play', '_btn'],
    iconClassName: 'player__btn-play-svg',
  },
  {
    key: 3,
    id: 'Next',
    wrapperClassName: ['player__btn-next'],
    iconClassName: 'player__btn-next-svg',
  },
  {
    key: 4,
    id: 'Repeat',
    wrapperClassName: ['player__btn-repeat', '_btn-icon'],
    iconClassName: 'player__btn-repeat-svg',
  },
  {
    key: 5,
    id: 'Shuffle',
    wrapperClassName: ['player__btn-shuffle', '_btn-icon'],
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
          <GlobalSvgSelector
            id={icon.id}
            iconClassName={classes[`${icon.iconClassName}`]}
          />
        </div>
      ))}
    </div>
  )
}

export default Buttons
