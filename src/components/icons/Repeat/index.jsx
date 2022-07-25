const Repeat = ({ className }) => {
  return (
    <svg className={className} alt="repeat">
      <use
        xlinkHref={process.env.PUBLIC_URL + 'img/icon/sprite.svg#icon-repeat'}
      ></use>
    </svg>
  )
}

export default Repeat
