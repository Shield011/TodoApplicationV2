import React from 'react'

function EditTodo({toggle, todos, todo, setTodos, text, editInput, setEditInput}) {

    console.log("hi");
    console.log(todo.id);
    console.log("hi");

    const editChangeHandler = () => {

    }
        // if (editInput === todo.id) {
        //     setEditInput({text})
        // }
        
    
    console.log("hiii");
    console.log();
    console.log("hiii");
        
   

    const editHandler = (e) => {
        e.preventDefault();


    }


    return (
        <div className = "edit-task">
            <h1 className = "edit-heading">Update Task</h1>
            <form className = "edit-task-form">
            <label className = "edit-task-label">Edit task:</label>
            <div>
            <textarea rows = "20" cols = "85"  className = "edit-input" type = 'text' name = "editTask" value = {editInput} onChange = {editChangeHandler}></textarea>
            </div>
                <button className = "update-btn" onClick = {editHandler} type = "submit"  >Update</button>
                <button className = "cancel-update-btn"onClick = {toggle} >Cancel</button>
            </form>
            
        </div>
    )
    }

export default EditTodo
