const Author = ({ wrapperClassName, linkClassName, title }) => {
  return (
    <div className={wrapperClassName}>
      <a className={linkClassName} href="http://">
        {title}
      </a>
    </div>
  )
}

export default Author
