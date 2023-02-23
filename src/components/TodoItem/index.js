import './index.css'

const TodoItem = props => {
  const {eachTodo, onDeleting} = props
  const {id, title} = eachTodo

  const onDelete = () => {
    onDeleting(id)
  }

  return (
    <li className="forList">
      <div className="forDiv">
        <p className="forListTopic">{title}</p>
        <div>
          <button className="forButton" type="button" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}
export default TodoItem
