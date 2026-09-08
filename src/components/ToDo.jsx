import { useState } from "react";
import "./ToDo.css";
// clear task List on button Click
// add deleted task to diff div with deleted Task Name
// also add there option to move that task to new state back
// add filter functionality
// add dropdown to filter based on task

const ToDo = () => {
  const [enteredText, setEnteredText] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleInputChange = (e) => setEnteredText(e.target.value);

  const addTaskToList = () => {
    const text = enteredText.trim();
    if (!text) {
      alert("Empty Task can't be added");
      return;
    }
    setTaskList((prev) => [
      ...prev,
      { value: text, id: Date.now(), status: "new" },
    ]);
    setEnteredText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTaskToList();
  };

  const toggleComplete = (id) => {
    // if status is completed and on clcik it will change to new and vice versa
    setTaskList((tasks) =>
      tasks.map((t) =>
        t.id === id
          ? { ...t, status: t.status === "completed" ? "new" : "completed" }
          : t,
      ),
    );
  };

  const deleteTask = (id) => {
    if (!confirm("Delete this task?")) return;
    setTaskList((tasks) =>
      tasks.map((task) => {
        return task.id === id ? { ...task, status: "deleted" } : task;
      }),
    );
  };

  // clear all task
  const clearTaskList = () => {
    setTaskList([]);
  };

  // Move Deleted Task to New TaskList
  const moveToNew = (task) => {
    setTaskList((tasks) =>
      tasks.map((t) => {
        return t.id === task.id ? { ...task, status: "new" } : t;
      }),
    );
  };

  //
  const activeTaskList = taskList.filter((task) => task.status !== "deleted");
  const deletedTaskList = taskList.filter((task) => task.status === "deleted");

  const total = activeTaskList.length;
  const completed = activeTaskList.filter(
    (t) => t.status === "completed",
  ).length;

  return (
    <div className="todo-app">
      <div className="todo-header">
        <h1>ToDo</h1>
        <div className="todo-counter">
          {completed}/{total} done
        </div>
      </div>

      <div className="todo-input-row">
        <input
          placeholder="What would you like to do today?"
          value={enteredText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          aria-label="new-task"
        />
        <button className="btn btn-add" onClick={addTaskToList}>
          Add
        </button>
        <button className="btn" onClick={clearTaskList}>
          Clear All
        </button>
      </div>
      <div className="task-container">
        {activeTaskList.length === 0 ? (
          <div className="empty-state">
            No tasks yet — add your first task above.
          </div>
        ) : (
          <ul className="task-list">
            {activeTaskList.map((task) => (
              <li className="task-item" key={task.id}>
                <div className="task-main">
                  <p
                    className={`task-text ${task.status === "completed" ? "completed" : ""}`}
                  >
                    {task.value}
                  </p>
                  <div className="task-badges">
                    <span className="badge">{task.status}</span>
                  </div>
                </div>

                <div className="task-actions">
                  <button
                    className="btn-ghost"
                    onClick={() => toggleComplete(task.id)}
                  >
                    {task.status === "completed" ? "Undo" : "Complete"}
                  </button>
                  <button
                    className="btn btn-delete"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="task-container">
        {deletedTaskList.length === 0 ? (
          <div className="empty-state">No deleted tasks yet!!!</div>
        ) : (
          <ul className="task-list">
            {deletedTaskList.map((task) => (
              <li className="task-item" key={task.id}>
                <div className="task-main">
                  <p>{task.value}</p>
                  <div className="task-badges">
                    <span className="badge">{task.status}</span>
                  </div>
                </div>

                <div className="task-actions">
                  <button className="btn" onClick={() => moveToNew(task)}>
                    Move to new
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ToDo;
