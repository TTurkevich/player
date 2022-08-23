import { useNavigate } from 'react-router-dom'

import cn from 'classnames'
import classes from './index.module.css'

import Logo from '../../components/Logo'

const SignUp = () => {
  const navigate = useNavigate()

  const fromPage = '/login'

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(fromPage, { replace: true })
  }

  return (
    <div className={classes.loginBlock}>
      <form className={classes.register} action="#" onSubmit={handleSubmit}>
        <Logo className={classes.logo} src="/img/logoBlack.png" />
        <input
          className={classes.input}
          placeholder='Логин'
          name="name"
          id='loginReg'
          type='text'
        />
        <input
          className={classes.input}
          placeholder='Пароль'
          name="password"
          id='passwordFirst'
          type='password'
        />
        <input
          className={classes.input}
          placeholder='Повторите пароль'
          name="password"
          id='passwordSecond'
          type='password'
        />
        <button className={cn(classes.btn, classes.signUp)}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  )
}

export default SignUp
