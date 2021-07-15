import React, {useState} from 'react'
import CreateTask from './CreateTask'
import TodoList from './TodoList'





function Todo() {
    const[show, setShow] = useState("")
    const[input, setInput] = useState("");
    const[todos, setTodos] = useState([]);
    const[editInput, setEditInput] = useState();
    
    

    const toggle = () =>{
       setShow(!show)
    };


return (
        <>
        <div className = "main-page">
            <h1 className = "heading"> Task To Do</h1>
            <div className = "search-bar">
            <input className = "search-input" type = "text" placeholder = "Search..." ></input>  
            <button className = "search-btn">Search</button>
            </div>
            <button className = "addtask-btn" onClick = {() => setShow("active")}>Add Task </button>
            
            {show === "active" && <CreateTask toggle = {toggle} input = {input} setInput = {setInput} todos = {todos} setTodos = {setTodos}/> }
        </div>
        <div>
        {
                todos.map(todo => (
                    <TodoList todos = {todos} setTodos = {setTodos} text = {todo.text} todo={todo} key={todo.id} editInput = {editInput} setEditInput = {setEditInput}/>
                ))

            }

        </div>
        
    
         </>
)
        
    
    
}
export default Todo
