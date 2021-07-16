import React, { useState } from "react";

function EditTodo({
  toggle,
  todo,
  editInput,
  setEditInput,
}) {
  const editChangeHandler = (e) => {
    setEditInput(e.target.value);
  };
  const editHandler = (e) => {
    e.preventDefault();
    todo.text = editInput;
    setEditInput("");
  };
  return (
    <div className="edit-task">
      <h1 className="edit-heading">Update Task</h1>
      <form className="edit-task-form">
        <label className="edit-task-label">Edit task:</label>
        <div>
          <textarea
            rows="20"
            cols="85"
            className="edit-input"
            type="text"
            name="editTask"
            value={editInput}
            onChange={editChangeHandler}
          ></textarea>
        </div>
        <button className="update-btn" onClick={editHandler} type="submit">
          Update
        </button>
        <button className="cancel-update-btn" onClick={toggle}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditTodo;
