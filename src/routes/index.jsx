import { Routes, Route } from 'react-router-dom'

import RequireAuth from '../Auth/RequireAuth'
import { AuthProvider } from '../Auth/AuthContext'

import Main from '../pages/Main'
import MyTracks from '../pages/MyTracks'
import Selections from '../pages/Selections'
import NotFound from '../pages/NotFound'
import Layout from '../pages/Layout'
import SignUp from '../pages/SignUp'
import LogIn from '../pages/LogIn'

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RequireAuth>
                <Main />
              </RequireAuth>
            }
          />
          <Route
            path="/myTracks"
            element={
              <RequireAuth>
                <MyTracks />
              </RequireAuth>
            }
          />
          <Route
            path="/selections"
            element={
              <RequireAuth>
                <Selections />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default AppRoutes
