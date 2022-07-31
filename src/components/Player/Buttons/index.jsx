import classes from './index.module.css'
import Prev from '../../Svg/Prev'
import Play from '../../Svg/Play'
import Next from '../../Svg/Next'
import Repeat from '../../Svg/Repeat'
import Shuffle from '../../Svg/Shuffle'

const icons = [
  {
    key: 1,
    Component: Prev,
    wrapperClassName: ['prev', 'btn', 'btnIcon'],
    iconClassName: 'prevSvg',
  },
  {
    key: 2,
    Component: Play,
    wrapperClassName: ['play', 'btn', 'btnIcon'],
    iconClassName: 'playSvg',
  },
  {
    key: 3,
    Component: Next,
    wrapperClassName: ['next', 'btn', 'btnIcon'],
    iconClassName: 'nextSvg',
  },
  {
    key: 4,
    Component: Repeat,
    wrapperClassName: ['repeat', 'btn', 'btnIcon'],
    iconClassName: 'repeatSvg',
  },
  {
    key: 5,
    Component: Shuffle,
    wrapperClassName: ['shuffle', 'btn', 'btnIcon'],
    iconClassName: 'shuffleSvg',
  },
]

const Buttons = () => {
  return (
    <div className={classes.controls}>
      {icons.map((Icon) => (
        <div
          key={Icon.key}
          className={Icon.wrapperClassName
            .map((item) => `${classes[item]}`)
            .join(' ')}
        >
          <Icon.Component className={classes[Icon.iconClassName]} />
        </div>
      ))}
    </div>
  )
}

export default Buttons
