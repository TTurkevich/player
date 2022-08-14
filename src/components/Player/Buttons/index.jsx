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
    wrapperClassName: [classes.prev, classes.btn, classes.btnIcon],
    iconClassName: 'prevIcon',
  },
  {
    key: 2,
    Component: Play,
    wrapperClassName: [classes.play, classes.btn, classes.btnIcon],
    iconClassName: 'playIcon',
  },
  {
    key: 3,
    Component: Next,
    wrapperClassName: [classes.next, classes.btn, classes.btnIcon],
    iconClassName: 'nextIcon',
  },
  {
    key: 4,
    Component: Repeat,
    wrapperClassName: [classes.repeat, classes.btn, classes.btnIcon],
    iconClassName: 'repeatIcon',
  },
  {
    key: 5,
    Component: Shuffle,
    wrapperClassName: [classes.shuffle, classes.btn, classes.btnIcon],
    iconClassName: 'shuffleIcon',
  },
]

const Buttons = () => {
  return (
    <div className={classes.controls}>
      {icons.map((Icon) => (
        <div
          key={Icon.key}
          className={Icon.wrapperClassName.map((item) => item).join(' ')}
        >
          <Icon.Component className={classes[Icon.iconClassName]} />
        </div>
      ))}
    </div>
  )
}

export default Buttons
