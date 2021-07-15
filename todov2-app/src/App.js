import React , {useState} from 'react';
import './App.css';
import Todo from './Components/Todo';
import CreateTask from './Components/CreateTask';
import TaskList from './Components/TaskList';

function App() {
  
 

  return (
    <div className="App">
      <Todo />

      {/* <CreateTask input = {input} setInput ={setInput} todos = {todos} setTodos = {setTodos}/> */}
      {/* <TaskList todos = {todos}/> */}
    </div>
  );
}

export default App;
