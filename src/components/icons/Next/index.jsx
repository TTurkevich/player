const Next = ({ className }) => {
  return (
    <svg className={className} alt="next">
      <use
        xlinkHref={process.env.PUBLIC_URL + 'img/icon/sprite.svg#icon-next'}
      ></use>
    </svg>
  )
}

export default Next
