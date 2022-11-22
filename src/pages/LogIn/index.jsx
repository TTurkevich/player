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
import { userLogin, userTokens } from '../../features/user/user-actions'
import { revertAll } from '../../features/general-action'

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

  const { loading, userInfo, userToken, error } = useSelector(selectUser)

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
    if (error) return disabled(true)
  }, [error, enabled])

  useEffect(() => {
    if (userInfo) {
      dispatch(userTokens(values))
    }
  }, [dispatch, userInfo])

  useEffect(() => {
    if (userToken) navigate('/')
  }, [navigate, userToken])

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(userLogin(values))
  }

  const logOut = () => {
    dispatch(revertAll())
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
      <Button id="btnSignUp" className={classes.signUp} onClick={logOut}>
        <NavLink className={cn(classes.link, classes.black)} to={'/signUp'}>
          Зарегистрироваться
        </NavLink>
      </Button>
    </Form>
  )
}

export default LogIn
