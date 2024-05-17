const Todo = ({ obj }) => {
  return (
    <div className={`todo_child-panel  ${obj.completed && "completed"}`}>
        <p className="title">{obj.title}</p>
    </div>
  )
}

export default Todo