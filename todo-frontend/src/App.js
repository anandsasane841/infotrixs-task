import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './component/FooterComponent';
import HeaderComponent from './component/HeaderComponent';
import TodoList from './component/TodoList';
import AddTaskComponent from './component/AddTaskComponent';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route path='/' element={<TodoList />} />
            <Route path='/Task' element={<TodoList />} />
            <Route path='/addTask' element={<AddTaskComponent />} />
            <Route path='/updateTaskById/:id' element={<AddTaskComponent />} />

          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
