import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TodoService from '../service/TodoService';

const TodoList = () => {
  const [userInfo, setInfo] = useState([]);

  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = () => {
    TodoService.getAllTasks()
      .then((res) => {
        setInfo(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTaskById = (task_id) => {
    TodoService.deleteTaskById(task_id)
      .then((res) => {
        getAllTasks();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='container' >
      <div>
        <h2 className='text-center' style={{ fontFamily: 'Bauhaus 93' }}>
          Lists of To-do
        </h2>
      </div>
      <Link to='/addTask' className='btn btn-primary mb-2'>
        Add Task
      </Link>

      <div>
        <table className='table table-bordered table-striped'>
          <thead>
            <tr>
              <th>Task ID</th>
              <th>Task Title</th>
              <th>Task Description</th>
              <th>Due Date</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Creation Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userInfo.map((res) => (
              <tr key={res.id}>
                <td>{res.task_id}</td>
                <td>{res.task_title}</td>
                <td>{res.task_desc}</td>
                <td>{res.due_date}</td>
                <td>{res.priority}</td>
                <td>{res.status}</td>
                <td>{res.creation_date}</td>
                <td>
                  <Link
                    className='btn btn-info'
                    to={`/updateTaskById/${res.task_id}`}
                  >
                    Update
                  </Link>

                  <button
                    className='btn btn-danger'
                    onClick={() => deleteTaskById(res.task_id)} 
                    style={{
                      marginLeft: '10px',
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
