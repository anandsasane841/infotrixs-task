import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import TodoService from '../service/TodoService';


const AddTaskComponent = () => {
  const [task_title, setTaskTitle] = useState('');
  const [task_desc, setTaskDesc] = useState('');
  const [due_date, setDueDate] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');
  const [creation_date, setCreationDate] = useState(getCurrentDate());
  const navigate = useNavigate();
  const { id } = useParams();

  function getCurrentDate() {
    const currentDate = new Date().toISOString().slice(0, 10);
    return currentDate;
  }

  const saveOrUpdateTask = (e) => {
    e.preventDefault();

    const task = {
      task_title,
      task_desc,
      due_date,
      priority,
      status,
      creation_date,
    };

    if (id) {
      TodoService.updateTaskById(id, task)
        .then((response) => {
          console.log(response.data);
          navigate('/Task');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      TodoService.addTask(task)
        .then((response) => {
          console.log(response.data);
          navigate('/Task');
        })
        .catch((error) => {
          console.log(error);
        })
      }
      
  }

  useEffect(() => {
    
      TodoService.getTaskById(id)
        .then((res) => {
          
          setTaskTitle(res.task_title);
          setTaskDesc(res.task_desc);
          setDueDate(res.due_date);
          setPriority(res.priority);
          setStatus(res.status);
          setCreationDate(res.creation_date);
        })
        .catch((error) => {
          console.log(error);
        });
    
  }, [id]);

  const title = () => {
    if (id) {
      return <h2 className="text-center">Update Task</h2>;
    } else {
      return <h2 className="text-center">Add Task</h2>;
    }
  };

  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <div className="card-body">
              <form>
                <div className="form-group mb-2">{title()}</div>

                <div className="form-group mb-2">
                  <label className="form-label">Task Title:</label>
                  <input
                    type="text"
                    placeholder="Enter task title"
                    name="taskTitle"
                    className="form-control"
                    value={task_title}
                    onChange={(e) => setTaskTitle(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Task Description:</label>
                  <input
                    type="text"
                    placeholder="Enter task description"
                    name="taskDesc"
                    className="form-control"
                    value={task_desc}
                    onChange={(e) => setTaskDesc(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Due Date:</label>
                  <input
                    type="date"
                    name="dueDate"
                    className="form-control"
                    value={due_date}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Priority:</label>
                  <select
                    name="priority"
                    className="form-control"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                  >
                    <option value="">Select priority</option>
                    <option value="high">High</option>
                    <option value="mid">Mid</option>
                    <option value="low">Low</option>
                  </select>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Status:</label>
                  <select
                    name="status"
                    className="form-control"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="">Select status</option>
                    <option value="pending">Pending</option>
                    <option value="inProgress">In Progress</option>
                    <option value="complete">Complete</option>
                  </select>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Creation Date:</label>
                  <input
                    type="text"
                    placeholder="Enter creation date"
                    name="creationDate"
                    className="form-control"
                    value={creation_date}
                    disabled
                  />
                </div>

                <button className="btn btn-primary me-2" onClick={saveOrUpdateTask} style={{ marginRight: '10px' }}>
  Submit
</button>
                <Link to="/Task" className="btn btn-danger ">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTaskComponent;
