import classes from './index.module.css'

const RadioButton = ({ handleClickOption }) => {
  const handleClick = (event) => {
    const value = event.target.value
    handleClickOption(value)
  }

  return (
    <div className={classes.radioForm}>
      <div className={classes.radioGroup}>
        <input
          className={classes.radioButton}
          type="radio"
          id="up"
          value="новые"
          name="sort"
          onChange={() => {
            handleClick(event)
          }}
        />
        <label htmlFor="up">Более новые</label>
      </div>
      <div className={classes.radioGroup}>
        <input
          className={classes.radioButton}
          type="radio"
          id="down"
          value="старые"
          name="sort"
          onChange={() => {
            handleClick(event)
          }}
        />
        <label htmlFor="down">Более старые</label>
      </div>
    </div>
  )
}

export default RadioButton
