import Like from "../../icons/Like"

const Time = ({ classNameDiv, className, classNameSpan, time }) => {
  return (
    <div className={classNameDiv}>
      <Like className={className} />
      <span className={classNameSpan}>{time}</span>
    </div>
  )
}

export default Time
