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
  const[sortType, setSortType] = useState('');

  
  const toggle = () => {
    setShow(!show);
  };

//   const onSearch = (e) => {
//     setSearchInput(e.target.value);
//     if (e.target.value.length === 0) {
//       setTodos(temptodos);
//     } else {
//       const filteredresult = todos.filter(
//         (item) => item.text === e.target.value
//       );
//       setTodos(filteredresult);
//       console.log(filteredresult);
//     }
//   };

  const changeHandler = (e) => {
    setSearchInput(e.target.value);
  };
  
  useEffect(() => {
    const sortTodos = (type) => {
        const types = {

            id : "id",
            Name : "Name",
            
        };
        console.log("Clicked")
        const sortProperty = types[type];
        console.log("Todod:",todos);
        const sorted = [...todos].sort((a, b) => b[sortProperty] - a[sortProperty]); 
        console.log(sorted);
        console.log(sortType);
        setData(sorted);
    }
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
          <button className="search-btn">
            Search
          </button>
        </div>

        <button className="addtask-btn" onClick={() => setShow("active")}>
          Add Task{" "}
        </button>
        <div className="filter-dropdown">
          <label className="Filter-title">Filter:</label>
          <select className="filter-list" onChange={(e) => setSortType(e.target.value)}>
            <option value = "id">id</option>
            <option className="filter-Item"  value = "Name">
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
            date = {todo.date}
            time = {todo.time}
          />
        ))}
      </div>
    </>
  );
}
export default Todo;
