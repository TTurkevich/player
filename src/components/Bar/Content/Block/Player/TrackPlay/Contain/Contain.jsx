import classes from './Contain.module.css'
import Image from './Image/Image'
import Author from './Author/Author'
import Album from './Album/Album'

const Contain = () => {
  return (
    <div className={classes['track-play__contain']}>
      <Image />
      <Author />
      <Album />
    </div>
  )
}

export default Contain
