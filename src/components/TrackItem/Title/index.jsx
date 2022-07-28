import GlobalSvgSelector from '../../GlobalSvg'

const Title = ({
  wrapperClassName,
  iconWrapperClassName,
  iconClassName,
  titleClassName,
  linkClassName,
  title,
}) => {
  return (
    <div className={wrapperClassName}>
      <div className={iconWrapperClassName}>
        <GlobalSvgSelector id="Note" iconClassName={iconClassName} />
      </div>
      <div className={titleClassName}>
        <a className={linkClassName} href="http://">
          {title}
        </a>
      </div>
    </div>
  )
}

export default Title
