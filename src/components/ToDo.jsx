import { useState } from "react";
import "./ToDo.css";
import Header from "./Header";
import Input from "./Input";
import ActiveTask from "./ActiveTask";
import DeleteTask from "./DeleteTask";
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
      <Header completed={completed} total={total}></Header>
      <Input
        enteredText={enteredText}
        handleInputChange={handleInputChange}
        handleKeyDown={handleKeyDown}
        addTaskToList={addTaskToList}
        clearTaskList={clearTaskList}
      ></Input>
      <ActiveTask
        activeTaskList={activeTaskList}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      ></ActiveTask>
      <DeleteTask
        deletedTaskList={deletedTaskList}
        moveToNew={moveToNew}
      ></DeleteTask>
    </div>
  );
};

export default ToDo;
