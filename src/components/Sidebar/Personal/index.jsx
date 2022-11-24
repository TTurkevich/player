import { useSelector } from 'react-redux'

import { useTheme } from '../../../context/Theme/ThemeProvider'
import { selectUser } from '../../../features/user/user-slice'

import cn from 'classnames'
import classes from './index.module.css'

const Personal = () => {
  const { theme } = useTheme()
  const { userInfo } = useSelector(selectUser)

  return (
    <div className={classes.personal}>
      <p className={classes.name}>{userInfo?.username}</p>
      <div className={cn(classes.avatar, classes[theme])}></div>
    </div>
  )
}

export default Personal
