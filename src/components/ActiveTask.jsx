const ActiveTask = ({activeTaskList,toggleComplete,deleteTask}) =>{
    return (
<div className="task-container">
  <h3>Avtived Task List</h3>
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
    )
}

export default ActiveTask;