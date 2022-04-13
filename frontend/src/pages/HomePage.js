import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ToDoAPI from "../api/ToDoAPI"
import AddTaskList from "../components/AddTaskList"
import TaskListSummary from "../components/TaskListSummary"

function HomePage(props) {
  // states
  const [taskLists, setTaskLists] = useState([])

  // effects
  useEffect(() => {
    loadTaskLists()
  }, []) // empty array means do this only one on initial render

  const loadTaskLists = async () => {
    const data = await ToDoAPI.getAllTaskLists()
    setTaskLists(data ? data : [])
  }

  // render
  const renderTaskLists = () => {
    return taskLists.map((taskList, index) => {
      return <TaskListSummary taskList={ taskList }/>
    })
  }
  
  return (
    <div>
      <h2>Home Page</h2>
      <hr />

      <AddTaskList />
      <hr />

      <h3>All Task Lists:</h3>
      { renderTaskLists() }
    </div>
  )
}

export default HomePage;