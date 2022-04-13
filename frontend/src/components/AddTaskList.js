import ToDoAPI from "../api/ToDoAPI";
import { useNavigate } from "react-router-dom"


function AddTaskList(props) {

  // router params
  const navigate = useNavigate()

  // event handlers
  const handleCreateTaskList = async (evt) => {
    evt.preventDefault()

    const taskListData = {
      name: evt.target.elements["name"].value,
      description: evt.target.elements["description"].value,
      tasks: []
    }

    console.log("SENDING task list data:", taskListData)

    const data = await ToDoAPI.createTaskList(taskListData)
  
    if (data) {
      console.log("RECEIVED data:", data)
      navigate(`/task-lists/${data.id}`)
    }
  }

  return (
    <div>
      <form onSubmit={ handleCreateTaskList } method="POST">
        <label>New Task List: </label>
        <input name="name" placeholder="enter name"/>
        <input name="description" placeholder="enter description"/>
        <button type="submit" >Add Task List</button>
      </form>
    </div>
  )
}

export default AddTaskList;