const Shuffle = ({ className }) => {
  return (
    <svg className={className} alt="shuffle">
      <use
        xlinkHref={process.env.PUBLIC_URL + 'img/icon/sprite.svg#icon-shuffle'}
      ></use>
    </svg>
  )
}

export default Shuffle
