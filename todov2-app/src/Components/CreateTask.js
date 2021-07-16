import React from "react";

function CreateTask({ toggle, input, setInput, todos, setTodos }) {
  const InputChangeHandler = (e) => {
    setInput(e.target.value);
};

        var tempDate = new Date();
        var date =
        tempDate.getFullYear() +
        "-" +
        (tempDate.getMonth() + 1) +
        "-" +
        tempDate.getDate();
    var time = tempDate.getHours() + ":" + tempDate.getMinutes();
    const currDate = date;
    const currTime = time;



  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: input, id: Math.floor(Math.random() * 10000), date: currDate, time: currTime },
    ]);
    toggle();

    setInput("");
  };

  console.log(setTodos);

  return (
    <div className="create-task">
      <h1 className="create-heading">Create new Task</h1>
      <form className="create-task-form">
        <label className="create-task-label"> Add task:</label>
        <div className="create-form-group">
          <textarea
            rows="12"
            cols="54"
            className="task-input"
            type="text"
            value={input}
            placeholder="Write here..."
            onChange={InputChangeHandler}
            name="taskName"
          ></textarea>
        </div>
        <button
          className="submit-task-btn"
          type="submit"
          onClick={submitHandler}
        >
          Add
        </button>
        <button className="cancel-task-btn" onClick={toggle}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default CreateTask;
