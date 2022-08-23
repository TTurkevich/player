import { NavLink } from 'react-router-dom'

import classes from './index.module.css'

const Selections = ({ selection }) => {
  return (
    <>
      {selection.items.map((item) => {
        return (
          <div key={item.id} className={classes.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.activeLink : classes.link
              }
              to="/selections"
            >
              <img className={classes.img} src={item.image} alt={item.alt} />
            </NavLink>
          </div>
        )
      })}
    </>
  )
}

export default Selections
