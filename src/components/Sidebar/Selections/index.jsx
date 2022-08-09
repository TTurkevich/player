import classes from './index.module.css'

const Selections = ({ selection }) => {
  return (
    <>
      {selection.items.map((item) => {
        return (
          <div key={item.id} className={classes.item}>
            <a className={classes.link} href="#">
              <img className={classes.img} src={item.image} alt={item.alt} />
            </a>
          </div>
        )
      })}
    </>
  )
}

export default Selections
