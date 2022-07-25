const Play = ({ className }) => {
  return (
    <svg className={className} alt="play">
      <use
        xlinkHref={process.env.PUBLIC_URL + 'img/icon/sprite.svg#icon-play'}
      ></use>
    </svg>
  )
}

export default Play
