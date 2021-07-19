import React, { useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import TodoList from "./TodoList";

function Todo() {
  const [show, setShow] = useState("");
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editInput, setEditInput] = useState();
  const [searchInput, setSearchInput] = useState();
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("");


  const toggle = () => {
    setShow(!show);
  };

  let tempArr = [];
 
  const onSearch = () => {
      console.log(searchInput);
    if (searchInput.length === 0) {
        tempArr = todos;
    } else {
        for (let i of todos) {
            if (i.text.includes(searchInput)){
                tempArr.push(i);
            }
            
        }
        
    }
    console.log("tempArr", tempArr);
  };

  const changeHandler = (e) => {
    setSearchInput(e.target.value);
    console.log(searchInput)
  };

  useEffect(() => {
    
    const sortTodos = (type) => {
      const types = {
        id: "id",
        text: "text",
        Date: "Date",
        Time: "Time",
      };
      console.log("Clicked");
      const sortProperty = types[type];
      console.log("Todod:", todos);

    let Compare = (a, b) => {
            if(a[sortProperty] > b[sortProperty]) return 1;
            else if(a[sortProperty] < b[sortProperty]) return -1;
            else return 0;
        }

    
      const sorted = [...todos].sort(Compare);
      console.log(sorted);
      console.log("sortProperty:", sortProperty);
      console.log(sortType);
      setData(sorted);
     
        <Todo />
          
      
    };
    sortTodos(sortType);
  }, [sortType]);

  return (
    <>
      <div className="main-page">
        <h1 className="heading"> Task To Do</h1>
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            value={searchInput}
            placeholder="Search..."
            onChange={changeHandler}
          ></input>
          <button className="search-btn" onClick={onSearch}>
            Search
          </button>
        </div>

        <button className="addtask-btn" onClick={() => setShow("active")}>
          Add Task{" "}
        </button>
        <div className="filter-dropdown">
          {/* <label className="Filter-title">Filter:</label> */}
          <select
            className="filter-list"
            onClick = {(e) => setSortType(e.target.value)}
          >
            <option className="filter-Item" value="id">
              ID
            </option>
            <option className="filter-Item" value="Date">
              Date
            </option>
            <option className="filter-Item" value="Time">
              Time
            </option>
            <option className="filter-Item" value="text">
              Name
            </option>
          </select>
        </div>

        {show === "active" && (
          <CreateTask
            toggle={toggle}
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
        )}

   
      </div>
      <div>
        {todos.map((todo) => (
          <TodoList
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            todo={todo}
            key={todo.id}
            editInput={editInput}
            setEditInput={setEditInput}
            date={todo.date}
            time={todo.time}
          />
        ))}
      </div>
    </>
  );
}
export default Todo;
