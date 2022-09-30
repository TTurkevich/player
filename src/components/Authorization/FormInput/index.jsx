import { useState } from 'react'

import classes from './index.module.css'

const FormInput = ({
  name,
  value,
  placeholder,
  onChange,
  errorMessage,
  ...other
}) => {
  const [focused, setFocused] = useState(false)

  return (
    <div className={classes.formInput}>
      <input
        {...other}
        name={name}
        value={value}
        className={classes.input}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={() => setFocused(true)}
        focused={focused.toString()}
      />
      {focused && <span className={classes.spanError}>{errorMessage}</span>}
    </div>
  )
}

export default FormInput
