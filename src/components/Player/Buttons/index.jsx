import classes from './index.module.css'

import Prev from '../../Icons/Prev'
import Play from '../../Icons/Play'
import Pause from '../../Icons/Pause'
import Next from '../../Icons/Next'
import Repeat from '../../Icons/Repeat'
import Shuffle from '../../Icons/Shuffle'

const icons = [
  {
    key: 1,
    Component: Prev,
    type: 'prev',
    wrapperClassName: [classes.prev, classes.btn, classes.btnIcon],
    iconClassName: 'prevIcon',
  },
  {
    key: 2,
    Component: Play,
    type: 'play',
    wrapperClassName: [classes.play, classes.btn, classes.btnIcon],
    iconClassName: 'playIcon',
  },
  {
    key: 3,
    Component: Next,
    type: 'next',
    wrapperClassName: [classes.next, classes.btn, classes.btnIcon],
    iconClassName: 'nextIcon',
  },
  {
    key: 4,
    Component: Repeat,
    type: 'repeat',
    wrapperClassName: [classes.repeat, classes.btn, classes.btnIcon],
    iconClassName: 'repeatIcon',
  },
  {
    key: 5,
    Component: Shuffle,
    type: 'shuffle',
    wrapperClassName: [classes.shuffle, classes.btn, classes.btnIcon],
    iconClassName: 'shuffleIcon',
  },
]

const Buttons = ({ playingBtn, onChange }) => {
  {
    playingBtn
      ? (icons[1].Component = Pause) && (icons[1].type = 'pause')
      : (icons[1].Component = Play) && (icons[1].type = 'play')
  }

  return (
    <div className={classes.controls}>
      {icons.map((Icon) => (
        <div
          key={Icon.key}
          data-id={Icon.type}
          className={Icon.wrapperClassName.map((item) => item).join(' ')}
          onClick={onChange}
        >
          <Icon.Component className={classes[Icon.iconClassName]} />
        </div>
      ))}
    </div>
  )
}

export default Buttons
