const Header = ({completed,total}) =>{
    return(
      <div className="todo-header">
        <h1>ToDo</h1>
        <div className="todo-counter">
          {completed}/{total} done
        </div>
      </div>
    )
}

export default Header;