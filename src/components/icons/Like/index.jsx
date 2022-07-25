const Like = ({ className }) => {
  return (
    <svg className={className} alt="like">
      <use
        xlinkHref={process.env.PUBLIC_URL + 'img/icon/sprite.svg#icon-like'}
      ></use>
    </svg>
  )
}

export default Like
