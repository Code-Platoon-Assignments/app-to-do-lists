
import axios from "axios"

const BASE_URL = "http://localhost:8000/todo_api/"

const tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall()
    console.log("RESPONSE:", response)
    console.log("RESPONSE DATA:", response.data)
    return response.data // this doesn't look like we're returning a promise, but automatically gets converted to a promise due to "async" function behavior
  }
  catch (e) {
    console.error("tryCatchFetch ERROR:", e)
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


export default ToDoAPI