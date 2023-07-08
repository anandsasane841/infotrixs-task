import axios from 'axios';

const TODO_BASE_API = 'http://localhost:8080/api/getAllTasks';
const TODO_BASE = 'http://localhost:8080/api/addTask';
const TODO_BASE_GETBYID = 'http://localhost:8080/api/getTaskById';
const TODO_BASE_UPADTEBYID = 'http://localhost:8080/api/updateTaskById';
const TODO_BASE_DELETEBYID = 'http://localhost:8080/api/deleteById';



class TodoService {
  getAllTasks() {
    return axios.get(TODO_BASE_API);
  }

  addTask(task) {
    return axios.post(TODO_BASE, task);
  }
  getTaskById(task_id)
  {
    return axios.get(TODO_BASE_GETBYID+'/'+task_id);
  }

  updateTaskById(task_id,task)
{
  return new axios.post(TODO_BASE_UPADTEBYID+'/'+task_id,task);

}

deleteTaskById(task_id)
{
  return new axios.delete(TODO_BASE_DELETEBYID+'/'+task_id);
}


}

export default new TodoService();
