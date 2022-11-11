export const LOGIN_INPUTS = [
  {
    id: 1,
    name: 'username',
    type: 'text',
    placeholder: 'Логин',
    errorMessage: 'Логин должен быть длинной 3-16!',
    pattern: '^[A-Za-z0-9]{3,16}$',
    required: true,
  },
  {
    id: 2,
    name: 'email',
    type: 'text',
    placeholder: 'Email',
    errorMessage: 'Email должен быть длинной 3-16!',
    pattern: '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,63}$',
    required: true,
  },
  {
    id: 3,
    name: 'password',
    type: 'password',
    placeholder: 'Пароль',
    errorMessage:
      'Пароль должен быть длинной 8-16 символов и включать одну букву, число и спецсимвол!',
    pattern:
      '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@$!%*#?&])[a-zA-Z0-9@$!%*#?&*]{8,16}$',
    required: true,
  },
]

export const SIGNUP_INPUTS = [
  {
    id: 1,
    name: 'username',
    type: 'text',
    placeholder: 'Логин',
    errorMessage: 'Логин должен быть длинной 3-16!',
    pattern: '^[A-Za-z0-9]{3,16}$',
    required: true,
  },
  {
    id: 2,
    name: 'email',
    type: 'text',
    placeholder: 'Email',
    errorMessage: 'Email должен быть длинной 3-16!',
    pattern: '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,63}$',
    required: true,
  },
  {
    id: 3,
    name: 'password',
    type: 'password',
    placeholder: 'Пароль',
    errorMessage:
      'Пароль должен быть длинной 8-16 символов и включать одну букву, число и спецсимвол!',
    pattern:
      '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@$!%*#?&])[a-zA-Z0-9@$!%*#?&*]{8,16}$',
    required: true,
  },
  {
    id: 4,
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Пароль',
    errorMessage: 'Пароль не совпадает!',
    pattern: '',
    required: true,
  },
]
