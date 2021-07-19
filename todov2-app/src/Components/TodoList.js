import React, { useState } from "react";
import EditTodo from "./EditTodo";

function TodoList({
  todos,
  todo,
  setTodos,
  text,
  editInput,
  setEditInput,
  date,
  time,
}) {
  const [visible, setVisible] = useState("");

  const toggle = () => {
    setVisible(!visible);
  };

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <div className="todo-table-list">
         <table>
        <tr>
          <th>TaskName</th>
          <th>Date</th>
          <th>Time</th>
          <th>Options</th>
        </tr>
     
     
     
        <tr>
          <td>{text}</td>
          <td>{date}</td>
          <td>{time}</td>
          <td>
            {" "}
            <button className="edit-btn" onClick={() => setVisible("active")}>
              Edit{" "}
            </button>
          
            {" "}
            <button className="delete-btn" onClick={deleteHandler}>
              Delete{" "}
            </button>
          </td>
        </tr>
      </table>

      {visible === "active" && (
        <EditTodo
          toggle={toggle}
          todos={todos}
          setTodos={setTodos}
          text={todo.text}
          todo={todo}
          key={todo.id}
          editInput={editInput}
          setEditInput={setEditInput}
        />
      )}
    </div>
  );
}

export default TodoList;
