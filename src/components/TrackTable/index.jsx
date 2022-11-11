import classes from './index.module.css'

import TrackTableHats from './TrackTableHats'

const TrackTable = ({ children }) => {
  return (
    <div className={classes.content}>
      <TrackTableHats />
      {children}
    </div>
  )
}

export default TrackTable
