import './index.css'

const TodoItem = props => {
  const {eachTodo, onDeleting} = props
  const {id, title} = eachTodo

  const onDelete = () => {
    onDeleting(id)
  }

  return (
    <li className="for-list">
      <div className="for-div">
        <p className="for-list-topic">{title}</p>
        <div>
          <button className="for-button" type="button" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}
export default TodoItem
