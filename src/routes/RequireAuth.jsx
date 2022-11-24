import { useLocation, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/user/user-slice'

const ProtectedRoute = ({ children }) => {
  const { userToken } = useSelector(selectUser)
  const location = useLocation()

  if (!userToken) {
    return <Navigate to="/login" state={{ from: location }} />
  } else {
    return children
  }
}

export default ProtectedRoute
