const Prev = ({ className }) => {
  return (
    <svg className={className} alt="prev">
      <use
        xlinkHref={process.env.PUBLIC_URL + 'img/icon/sprite.svg#icon-prev'}
      ></use>
    </svg>
  )
}

export default Prev
