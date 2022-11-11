import ListGroup from './ListGroup'
import ListGroupItem from './ListGroupItem'

const List = () => {
  return (
    <ListGroup>
      <ListGroupItem active>List item 1</ListGroupItem>
      <ListGroupItem>List item 2</ListGroupItem>
      <ListGroupItem>List item 3</ListGroupItem>
      <ListGroupItem>List item 4</ListGroupItem>
    </ListGroup>
  )
}
export default List
