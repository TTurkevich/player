const Dislike = ({className}) => {
  return (
    <svg className={className} alt="dislike">
      <use
        xlinkHref={process.env.PUBLIC_URL + 'img/icon/sprite.svg#icon-dislike'}
      ></use>
    </svg>
  )
}

export default Dislike
