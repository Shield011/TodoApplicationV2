import React, {useState} from 'react'
import EditTodo from './EditTodo'


function TodoList({todos, todo, setTodos, text}) {
    const[visible, setVisible] = useState("")
    const toggle =()=>{
        setVisible(!visible)
    }

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    };

    const editHandler = (id) => {


    }

    return (
        <div>
            <li className = "todo-item">{text}</li>
            <button onClick = {() => setVisible("active")}>Edit</button>
            {visible === "active" && <EditTodo/>}
            <button onClick = {deleteHandler} className = "delete-todo-button">Delete</button>
            
        </div>
    )
}

export default TodoList
