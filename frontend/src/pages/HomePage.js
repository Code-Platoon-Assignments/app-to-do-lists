import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ToDoAPI from "../api/ToDoAPI"

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
      return <Link key={ index } to={ `/task-lists/${taskList.id}` }><p>{ taskList.name }</p></Link>
    })
  }
  
  return (
    <div>
      <h2>Home Page</h2>
      <hr />

      <form>
        <label>New Task List: </label>
        <input placeholder="enter name"/>
        <input placeholder="enter description"/>
        <button>Add Task List</button>
      </form>
      <hr />

      <h3>All Task Lists:</h3>
      { renderTaskLists() }
    </div>
  )
}

export default HomePage;