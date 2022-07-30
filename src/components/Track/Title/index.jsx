import Note from '../../Svg/Note'

const Title = ({
  wrapperClassName,
  iconWrapperClassName,
  iconClassName,
  titleClassName,
  linkClassName,
  title,
  spanClassName,
  clarification,
}) => {
  return (
    <div className={wrapperClassName}>
      <div className={iconWrapperClassName}>
        <Note className={iconClassName} />
      </div>
      <div className={titleClassName}>
        <a className={linkClassName} href="http://">
          {title}
          <span className={spanClassName}>{clarification}</span>
        </a>
      </div>
    </div>
  )
}

export default Title
