import { useTheme } from '../../../context/Theme/ThemeProvider'

import cn from 'classnames'

import classes from './index.module.css'

import IconNote from '../../Track/IconNote'

const Title = ({ title, clarification }) => {
  const { theme } = useTheme()

  return (
    <div className={classes.title}>
      <IconNote />
      <div>
        <a className={classes.titleLink} href="#">
          {title}
          <span className={cn(classes.сlarification, classes[theme])}>
            {clarification}
          </span>
        </a>
      </div>
    </div>
  )
}

export default Title
