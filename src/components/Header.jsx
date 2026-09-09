const Header = ({completed,total,toggleMode}) =>{
    return(
      <div className="todo-header">
        <h1>ToDo</h1>
        <div>
            <button class ="btn" onClick = {toggleMode}>Toggle Theme</button>
        </div>
        <div className="todo-counter">
          {completed}/{total} done
        </div>
      </div>
    )
}

export default Header;