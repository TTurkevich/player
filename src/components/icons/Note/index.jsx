const Note = ({className}) => {
  return (
    <svg className={className} alt="music">
      <use
        xlinkHref={process.env.PUBLIC_URL + 'img/icon/sprite.svg#icon-note'}
      ></use>
    </svg>
  )
}

export default Note
