import './App.css';
import { HashRouter, Routes, Route, Link } from "react-router-dom"

// pages
import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Link to="/"><h1>To Do Lists App</h1></Link>
        <hr />
        
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/task-lists/:id" element={ <TaskListPage /> } />
        </Routes>

      </HashRouter>
    </div>
  );
}

export default App;
