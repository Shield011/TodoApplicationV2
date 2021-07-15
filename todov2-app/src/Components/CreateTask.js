import React, {useState} from 'react'


function CreateTask({toggle, input, setInput, todos, setTodos}) {
  

    const InputChangeHandler = (e) => {
        setInput(e.target.value);
      };
    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text:input, id: Math.floor(Math.random()*10000)},
        ]);
        toggle();
       
        setInput("");
    };
   
    
    
    return (


        <div>
            <form > 
                <label>Add task</label>
                <input type = 'text' value = {input} onChange={InputChangeHandler} name = "taskName"></input>
                <button type = "submit" onClick = {submitHandler} >Add</button>
                <button onClick = {toggle}>Cancel</button>
            </form>
            
        </div>
       
       
    )
}

export default CreateTask
