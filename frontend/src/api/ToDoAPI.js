
import axios from "axios"

const BASE_URL = "http://localhost:8000/todo_api/"

const tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall()
    console.log("RESPONSE:", response)
    console.log("RESPONSE DATA:", response.data)
    return response.data ? response.data : { message: "success" } // this doesn't look like we're returning a promise, but automatically gets converted to a promise due to "async" function behavior
  }
  catch (e) {
    console.error("tryCatchFetch ERROR:", e.response ? e.response.data : e)
    return null
  }
}


// stuff to export
const ToDoAPI = { }


ToDoAPI.getAllTaskLists = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}task-lists/`))
}

//// this does the same things as the async await above
// ToDoAPI.getAllTaskLists2 = () => {
//   return tryCatchFetch(() => axios.get(`${BASE_URL}task-lists/`))
//     .then((data) => { return data })
// }

ToDoAPI.createTaskList = async (taskListData) => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}task-lists/`, taskListData))
}

ToDoAPI.getTaskListById = async (taskListId) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}task-lists/${taskListId}/`))
}


ToDoAPI.deleteTaskListById = async (taskListId) => {
  return await tryCatchFetch(() => axios.delete(`${BASE_URL}task-lists/${taskListId}/`))
}


ToDoAPI.getTaskById = async (taskId) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}tasks/${taskId}/`))
}



// GET to the list view   => get all
// POST to the list view  => create new
// GET to the detail view => get one
// PUT to the detail view => update one
// PATCH to the detail view => partial up date one
// DELETE to the detail view => delete one


export default ToDoAPI