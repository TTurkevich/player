import classes from './index.module.css'
import Prev from '../../Icons/Prev'
import Play from '../../Icons/Play'
import Next from '../../Icons/Next'
import Repeat from '../../Icons/Repeat'
import Shuffle from '../../Icons/Shuffle'

const icons = [
  {
    key: 1,
    Component: Prev,
    wrapperClassName: ['prev', 'btn', 'btnIcon'],
    iconClassName: 'prevIcon',
  },
  {
    key: 2,
    Component: Play,
    wrapperClassName: ['play', 'btn', 'btnIcon'],
    iconClassName: 'playIcon',
  },
  {
    key: 3,
    Component: Next,
    wrapperClassName: ['next', 'btn', 'btnIcon'],
    iconClassName: 'nextIcon',
  },
  {
    key: 4,
    Component: Repeat,
    wrapperClassName: ['repeat', 'btn', 'btnIcon'],
    iconClassName: 'repeatIcon',
  },
  {
    key: 5,
    Component: Shuffle,
    wrapperClassName: ['shuffle', 'btn', 'btnIcon'],
    iconClassName: 'shuffleIcon',
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
