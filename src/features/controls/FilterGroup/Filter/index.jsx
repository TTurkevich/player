import FilterButton from '../FilterButton'
import Modal from '../Modal'

import classes from './index.module.css'

const Filter = ({
  nameFilter,
  content,
  onChange,
  active,
  className,
  isVisible,
  modalClassName,
  handleClickOption,
  counter,
  isRadio,
  ...attrs
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.containerBtn}>
        <FilterButton
          onChange={onChange}
          nameFilter={nameFilter}
          className={className}
          active={active}
          {...attrs}
        >
          {active && counter && (
            <div value={counter} className={classes.circle}>
              {counter}
            </div>
          )}
        </FilterButton>
      </div>
      <div className={classes.containerModal}>
        <Modal
          isVisible={isVisible}
          content={content}
          modalClassName={modalClassName}
          handleClickOption={handleClickOption}
          isRadio={isRadio}
        />
      </div>
    </div>
  )
}

export default Filter
