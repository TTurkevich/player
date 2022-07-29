import Like from '../../Svg/Like'

const Time = ({ wrapperClassName, className, timeClassName, time }) => {
  return (
    <div className={wrapperClassName}>
      <Like iconClassName={className} />
      <span className={timeClassName}>{time}</span>
    </div>
  )
}

export default Time
