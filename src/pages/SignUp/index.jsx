import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { SIGNUP_INPUTS } from '../../server/AUTH_Form'

import { useTheme } from '../../context/Theme/ThemeProvider'

import classes from './index.module.css'

import Form from '../../components/Authorization/Form'
import FormInput from '../../components/Authorization/FormInput'
import Button from '../../components/Authorization/Button'
import LogoIcon from '../../components/Icons/LogoIcon'

const SignUp = () => {
  const { theme } = useTheme()
  const navigate = useNavigate()

  const [enabled, disabled] = useState(true)

  const [values, setValues] = useState({
    userName: '',
    password: '',
    confirmPassword: '',
  })

  const fromPage = '/login'

  SIGNUP_INPUTS[2].pattern = `${values.password}`

  const invalidInput = Object.values(values).some((item) => item === '')
  const validPassword = values.password === values.confirmPassword

  useEffect(() => {
    if (!invalidInput && validPassword === true) {
      return disabled(false)
    }
  }, [enabled, invalidInput, validPassword])

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(fromPage, { replace: true })
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
        Зарегистрироваться
      </Button>
    </Form>
  )
}

export default SignUp
