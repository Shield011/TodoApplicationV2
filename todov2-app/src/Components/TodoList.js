import React, {useState} from 'react'
import EditTodo from './EditTodo'


function TodoList({todos, todo, setTodos, text, editInput, setEditInput}) {
    const[visible, setVisible] = useState("")

    
    var tempDate = new Date();
    var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() ;
    var time = tempDate.getHours()+':'+ tempDate.getMinutes();
    const currDate = date;
    const currTime = time;

    
    

    const toggle =()=>{
        setVisible(!visible)
    }


    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    };
    

    return (
        <div className = "task-list">
           
            <li className = "todo-item">{text}</li>
            <p className = "currDate">{currDate}</p>
            <p className = "currTime">{currTime}</p>
            <button className = "edit-btn" onClick = {() => setVisible("active")}>Edit</button>
            <button className = "delete-btn" onClick = {deleteHandler} >Delete</button>
            {visible === "active" && <EditTodo toggle = {toggle} todos = {todos} setTodos = {setTodos} text = {todo.text} todo={todo} key={todo.id} editInput = {editInput} setEditInput = {setEditInput}/>}
            
        </div>
    )
}

export default TodoList
