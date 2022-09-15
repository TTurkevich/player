const Album = ({ wrapperClassName, linkClassName, title }) => {
  return (
    <div className={wrapperClassName}>
      <a className={linkClassName} href="#">
        {title}
      </a>
    </div>
  )
}

export default Album
