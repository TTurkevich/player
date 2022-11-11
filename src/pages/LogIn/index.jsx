import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import cn from 'classnames'

import { useTheme } from '../../context/Theme/ThemeProvider'

import { LOGIN_INPUTS } from '../../data/AUTH_FORM'
import Form from '../../components/Authorization/Form'
import FormInput from '../../components/Authorization/FormInput'
import Button from '../../components/Authorization/Button'
import LogoIcon from '../../components/Icons/LogoIcon'
import { selectUser, clearError } from '../../features/user/user-slice'
import { userLogin, userToken } from '../../features/user/user-actions'

import classes from './index.module.css'

const LogIn = () => {
  const dispatch = useDispatch()
  const { theme } = useTheme()
  const navigate = useNavigate()
  const [enabled, disabled] = useState(true)
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
  })

  const { loading, userInfo, error, success } = useSelector(selectUser)

  const invalidInput = Object.values(values).some((item) => item === '')

  useEffect(() => {
    if (!invalidInput) {
      return disabled(false)
    }
  }, [enabled, invalidInput])

  useEffect(() => {
    if (invalidInput) {
      dispatch(clearError())
    }
  }, [dispatch, invalidInput])

  useEffect(() => {
    if (userInfo) {
      dispatch(userToken(values))
    }
  }, [dispatch, userInfo])

  useEffect(() => {
    if (success) navigate('/')
  }, [navigate, success])

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(userLogin(values))
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
        {loading ? '...loading' : 'Войти'}
      </Button>
      {error && (
        <div className={classes.message}>
          <div className={classes.alert}>{error}</div>
        </div>
      )}
      <Button id="btnSignUp" className={classes.signUp}>
        <NavLink className={cn(classes.link, classes.black)} to={'/signUp'}>
          Зарегистрироваться
        </NavLink>
      </Button>
    </Form>
  )
}

export default LogIn
