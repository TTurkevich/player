const VolumeSpeaker = ({ className }) => {
  return (
    <svg className={className} alt="volume">
      <use
        xlinkHref={process.env.PUBLIC_URL + 'img/icon/sprite.svg#icon-volume'}
      ></use>
    </svg>
  )
}

export default VolumeSpeaker
