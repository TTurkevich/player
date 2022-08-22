import { useState } from 'react'
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom'
import cn from 'classnames'

import classes from './index.module.css'

import Logo from '../../components/Logo'
import useAuthContext from '../../Auth/useAuthContext'

const LogIn = () => {
  const { auth, login } = useAuthContext()
  const navigate = useNavigate()
  const location = useLocation()

  const [invalid, setInvalid] = useState(false)

  if (auth) {
    return <Navigate to="/" replace={true} />
  }

  const fromPage = location.state?.from?.pathname || '/'

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const password = form.password.value
    const success = () => navigate(fromPage, { replace: true })
    const failure = () => setInvalid(true)
    login(name, password, success, failure)
  }

  return (
    <div className={classes.loginBlock}>
      <form
        className={classes.register}
        action="#"
        id="formLogIn"
        onSubmit={handleSubmit}
      >
        <Logo className={classes.logo} src="/img/logoBlack.png" />
        <input
          className={
            invalid
              ? cn(classes.input, classes.inputError)
              : cn(classes.login, classes.input)
          }
          placeholder={'Логин'}
          name="name"
          id={'formlogin'}
          type={'text'}
        />
        <input
          className={
            invalid ? cn(classes.input, classes.inputError) : classes.input
          }
          placeholder={'Пароль'}
          name="password"
          id={'formpasswor'}
          type={'password'}
        />
        <button id="btnEnter" className={cn(classes.btn, classes.logIn)}>
          Войти
        </button>
        <button id="btnSignUp" className={cn(classes.btn, classes.signUp)}>
          <NavLink className={cn(classes.link, classes.black)} to={'/signUp'}>
            Зарегистрироваться
          </NavLink>
        </button>
      </form>
    </div>
  )
}

export default LogIn
