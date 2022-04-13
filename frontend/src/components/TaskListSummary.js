import { Link } from "react-router-dom"


function TaskListSummary(props) {
  return (
    <div>
      <Link key={ props.taskList.id } to={ `/task-lists/${ props.taskList.id }` }>{ props.taskList.name }</Link>
      &nbsp;
      <button className="btn-delete">x</button>
    </div>
  )
}

export default TaskListSummary;