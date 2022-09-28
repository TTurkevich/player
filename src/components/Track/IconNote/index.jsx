import cn from 'classnames'

import { useTheme } from '../../../context/Theme/ThemeProvider'

import Note from '../../Icons/Note'

import classes from './index.module.css'

const IconNote = () => {
  const { theme } = useTheme()

  return (
    <div className={cn(classes.image, classes[theme])}>
      <Note className={cn(classes.icon, classes[theme])} />
    </div>
  )
}

export default IconNote
