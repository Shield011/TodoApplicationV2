import React, {useState} from 'react'
import CreateTask from './CreateTask'
import TodoList from './TodoList'

function Todo() {
    const[show, setShow] = useState("")
    const[input, setInput] = useState("");
    const[todos, setTodos] = useState([]);
    const[editInput, setEditInput] = useState("");
   

    const toggle = () =>{
       setShow(!show)
    }


    return (
        <>
        <div>
            <h1> Task To Do</h1>
            <button onClick = {() => setShow("active")}>Add Task </button>
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
