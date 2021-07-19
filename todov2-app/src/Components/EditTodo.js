import React, { useState } from "react";

function EditTodo({
  toggle,
  todo,
  text,
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
            rows="12"
            cols="54"
            className="edit-input"
            type="text"
            name="editTask"
            placeholder = "Write here..."
            value={text}
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
