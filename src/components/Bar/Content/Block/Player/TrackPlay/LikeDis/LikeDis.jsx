import classes from './LikeDis.module.css'
import Like from './Like/Like'
import Dislike from './Dislike/Dislike'

const LikeDis = () => {
  return (
    <div className={`${classes['track-play__like-dis']} ${classes['_btn-icon']}`}>
      <Like />
      <Dislike />
    </div>
  )
}

export default LikeDis
