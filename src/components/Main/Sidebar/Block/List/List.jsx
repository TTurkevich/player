import classes from './List.module.css'
import ListItem from './ListItem/ListItem'

const List = () => {
  return (
    <div className={classes.sidebar__list}>
      <ListItem image={process.env.PUBLIC_URL + 'img/playlist01.png'} alt={"day's playlist"} />
      <ListItem image={process.env.PUBLIC_URL + 'img/playlist02.png'} alt={"day's playlist"} />
      <ListItem image={process.env.PUBLIC_URL + 'img/playlist03.png'} alt={"day's playlist"} />
    </div>
  )
}

export default List
