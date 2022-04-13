import { Link } from "react-router-dom"
import ToDoAPI from "../api/ToDoAPI";


function TaskListSummary(props) {

  // event handlers
  const handleDeleteTaskList = async () => {
    const data = await ToDoAPI.deleteTaskListById(props.taskList.id) // this is to remove the data from the Django API
    if (data) {
      props.removeTaskList(props.taskList.id) // this is just to remove the data from the parent (nothing to do with the Django API)
    }
  }

  // render
  return (
    <div>
      <Link key={ props.taskList.id } to={ `/task-lists/${ props.taskList.id }` }>{ props.taskList.name }</Link>
      &nbsp;
      <button className="btn-delete" onClick={ handleDeleteTaskList }>x</button>
    </div>
  )
}

export default TaskListSummary;