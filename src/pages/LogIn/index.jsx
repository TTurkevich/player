import { useState, useEffect } from 'react'
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom'

import cn from 'classnames'

import { LOGIN_INPUTS } from '../../server/AUTH_Form'

import { useTheme } from '../../context/Theme/ThemeProvider'
import useAuthContext from '../../Auth/useAuthContext'

import Form from '../../components/Authorization/Form'
import FormInput from '../../components/Authorization/FormInput'
import Button from '../../components/Authorization/Button'
import LogoIcon from '../../components/Icons/LogoIcon'

import classes from './index.module.css'

const LogIn = () => {
  const { theme } = useTheme()
  const { auth, login } = useAuthContext()
  const navigate = useNavigate()
  const location = useLocation()
  const [enabled, disabled] = useState(true)

  const [values, setValues] = useState({
    userName: '',
    password: '',
  })

  if (auth) {
    return <Navigate to="/" replace={true} />
  }

  const fromPage = location.state?.from?.pathname ?? '/'

  const invalidInput = Object.values(values).some((item) => item === '')

  useEffect(() => {
    if (!invalidInput) {
      return disabled(false)
    }
  }, [enabled, invalidInput])

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const failure = () => {
      console.log('пользователь не найден')
    }
    const success = () => {
      navigate(fromPage, { replace: true })
    }
    login(values.userName, values.password, success, failure)
  }

  return (
    <Form themeStyle={theme} onSubmit={handleSubmit}>
      <LogoIcon className={classes.logo} />
      {LOGIN_INPUTS.map((input) => (
        <FormInput
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}
        />
      ))}

      <Button disabled={enabled} id="btnEnter" className={classes.logIn}>
        Войти
      </Button>
      <Button id="btnSignUp" className={classes.signUp}>
        <NavLink className={cn(classes.link, classes.black)} to={'/signUp'}>
          Зарегистрироваться
        </NavLink>
      </Button>
    </Form>
  )
}

export default LogIn
