import { useEffect, useState } from "react"
import ToDoAPI from "../api/ToDoAPI"
import { useParams } from "react-router-dom"



function TaskListPage(props) {
  // states
  const [taskList, setTaskList] = useState(null)
  const [tasks, setTasks] = useState([])

  // params
  const params = useParams()

  // effects
  useEffect(() => {
    loadTaskList()
  }, [params.id])

  const loadTaskList = async () => {
    let data = await ToDoAPI.getTaskListById(params.id)
    setTaskList(data)
  }
  
  useEffect(() => {
    loadTasks()
  }, [taskList])
  
  const loadTasks = async () => {
    if (!taskList)
      setTasks([])

    let newTasks = []
    for (const taskId of taskList.tasks) {
      newTasks.push(await ToDoAPI.getTaskById(taskId))
    }

    setTasks(newTasks)
  }
  
  // render
  const renderTasks = () => {
    return tasks.map((task, index) => {
      return <p key={ index }>{ task.task }, due: { task.due_date }</p>
    })
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