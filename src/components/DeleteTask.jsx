const DeleteTask = ({deletedTaskList,moveToNew}) =>{
    return (
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
    )
}
export default DeleteTask;