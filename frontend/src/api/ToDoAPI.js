
import axios from "axios"

const BASE_URL = "http://localhost:8000/todo_api/"

const tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall()
    console.log("RESPONSE:", response)
    console.log("RESPONSE DATA:", response.data)
    return response.data // this doesn't look like a promise, but gets converted to a promise due to "async"
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



export default ToDoAPI