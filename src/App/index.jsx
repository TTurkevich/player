import classes from './index.module.css'
import AppRoutes from '../routes'

function App() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <AppRoutes />
      </div>
    </div>
  )
}

export default App
