import Like from '../../Icons/Like'

const Time = ({ wrapperClassName, className, timeClassName, time }) => {
  return (
    <div className={wrapperClassName}>
      <Like className={className} />
      <span className={timeClassName}>{time}</span>
    </div>
  )
}

export default Time
