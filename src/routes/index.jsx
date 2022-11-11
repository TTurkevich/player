import { Routes, Route } from 'react-router-dom'

import ProtectedRoute from './RequireAuth'
import Main from '../pages/Main'
import MyTracks from '../pages/MyTracks'
import Selections from '../pages/Selections'
import NotFound from '../pages/NotFound'
import Layout from '../pages/Layout'
import SignUp from '../pages/SignUp'
import LogIn from '../pages/LogIn'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          }
        />
        <Route
          path="/favorite"
          element={
            <ProtectedRoute>
              <MyTracks />
            </ProtectedRoute>
          }
        />
        <Route
          path="/selections/:name"
          element={
            <ProtectedRoute>
              <Selections />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  )
}

export default AppRoutes
