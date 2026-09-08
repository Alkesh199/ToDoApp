const Input = ({enteredText,handleInputChange,handleKeyDown,addTaskToList,clearTaskList}) =>{
    return (
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
    )
}
export default Input;