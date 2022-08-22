import { useLocation, Navigate } from 'react-router-dom'
import useAuthContext from './useAuthContext'

const RequireAuth = ({ children }) => {
  const location = useLocation()
  const { auth } = useAuthContext()

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return children
}

export default RequireAuth
