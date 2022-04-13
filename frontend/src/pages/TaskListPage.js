function TaskListPage(props) {
  
  // render
  const renderTasks = () => {
    let elements = []
    for (let i = 0; i < 5; i++) {
      elements.push(<p key={ i }>Task Summary</p>)
    }
    return elements
  }
  
  return (
    <div>
      <h2>Task List Title</h2>
      <h3>Task List description</h3>
      <hr />

      <h3>All Tasks:</h3>
      { renderTasks() }
    </div>
  )
}

export default TaskListPage;