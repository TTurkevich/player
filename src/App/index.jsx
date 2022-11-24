import cn from 'classnames'

import { useTheme } from '../context/Theme/ThemeProvider'

import AppRoutes from '../routes'
import classes from './index.module.css'

function App() {
  const { theme } = useTheme()

  return (
    <div className={cn(classes.wrapper, classes[theme])}>
      <div className={classes.container}>
        <AppRoutes />
      </div>
    </div>
  )
}

export default App
