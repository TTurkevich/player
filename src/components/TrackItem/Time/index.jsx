import GlobalSvgSelector from '../../GlobalSvg'

const Time = ({ wrapperClassName, className, timeClassName, time }) => {
  return (
    <div className={wrapperClassName}>
      <GlobalSvgSelector id="Like" iconClassName={className} />
      <span className={timeClassName}>{time}</span>
    </div>
  )
}

export default Time
