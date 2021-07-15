import React from 'react'

function EditTodo() {
    return (
        <div>
            <form>
            <label>Edit task</label>
                <input type = 'text' value = {editInput} onChange={InputChangeHandler} name = "taskName"></input>
                <button type = "submit" onClick = {submitHandler}>Update</button>
                <button onClick = {toggle}>Cancel</button>
            </form>
            
        </div>
    )
}

export default EditTodo
