import React, {useState} from 'react'
import TodoList from './TodoList';

function CreateTask({toggle}) {

    const[input, setInput] = useState("");
    const[todos, setTodos] = useState([]);

  

    const InputChangeHandler = (e) => {
        setInput(e.target.value);
        // console.log(e.target.value);
      };
    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text:input, id: Math.floor(Math.random()*10000)}
        ]);
        setInput("");
    }
    
    
    return (


        <div>
            <form > 
                <label>Add task</label>
                <input type = 'text' value = {input} onChange={InputChangeHandler} name = "taskName"></input>
                <button onClick = {submitHandler}>Add</button>
                <button onClick = {toggle}>Cancel</button>
            </form>
            
        </div>
       
    )
}

export default CreateTask
