import React, {useState} from 'react'
import CreateTask from './CreateTask'
import TodoList from './TodoList'

function Todo({todos}) {
    const[show, setShow] = useState("")

    console.log(todos)
    
    

    const toggle = () =>{
       setShow(!show)
    }


    return (
        <>
        <div>
            <h1> Task To Do</h1>
            <button onClick = {() => setShow("active")}>Add Task </button>
            {show === "active" && <CreateTask toggle = {toggle}/> }
        </div>
        <div>
            {todos.map(todo => ((
                 <TodoList />
            ))}
           
        </div>
     
    
        
        </>
    )
}

export default Todo
