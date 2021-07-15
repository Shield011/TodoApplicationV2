import React from 'react'


function TodoList({text}) {
    return (
        <div>
            <li className = "todo-item">{text}</li>
            <button className = "edit-todo-button">Edit</button>
            <button className = "delete-todo-button">Delete</button>
            
        </div>
    )
}

export default TodoList
