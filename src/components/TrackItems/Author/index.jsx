const Author = ({ classNameDiv, classNameLink, title }) => {
  return (
    <div className={classNameDiv}>
      <a className={classNameLink} href="http://">
        {title}
      </a>
    </div>
  )
}

export default Author
