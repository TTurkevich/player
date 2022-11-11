import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { SIGNUP_INPUTS } from '../../data/AUTH_FORM'

import { useTheme } from '../../context/Theme/ThemeProvider'

import classes from './index.module.css'

import Form from '../../components/Authorization/Form'
import FormInput from '../../components/Authorization/FormInput'
import Button from '../../components/Authorization/Button'
import LogoIcon from '../../components/Icons/LogoIcon'
import { selectUser, clearError } from '../../features/user/user-slice'
import { userRegister } from '../../features/user/user-actions'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { theme } = useTheme()
  const [enabled, disabled] = useState(true)
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const { loading, userInfo, error, success } = useSelector(selectUser)

  SIGNUP_INPUTS[3].pattern = `${values.password}`

  const invalidInput = Object.values(values).some((item) => item === '')
  const validPassword = values.password === values.confirmPassword

  useEffect(() => {
    if (!invalidInput && validPassword === true) {
      return disabled(false)
    }
  }, [enabled, invalidInput, validPassword])

  useEffect(() => {
    if (success) navigate('/login')

    if (userInfo) navigate('/')
  }, [navigate, userInfo, success])

  useEffect(() => {
    if (invalidInput) {
      dispatch(clearError())
    }
  }, [dispatch, invalidInput])

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(userRegister(values))
  }

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  return (
    <Form themeStyle={theme} onSubmit={handleSubmit}>
      <LogoIcon className={classes.logo} />
      {SIGNUP_INPUTS.map((input) => (
        <FormInput
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}
        />
      ))}

      <Button disabled={enabled} className={classes.signUp}>
        {loading ? '...loading' : 'Зарегистрироваться'}
      </Button>
      {error && (
        <div className={classes.message}>
          <div className={classes.alert}>{error}</div>
        </div>
      )}
    </Form>
  )
}

export default SignUp
