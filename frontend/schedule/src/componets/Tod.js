import React from "react";

function Todo(props){
    return(
        <div className="container">
      <h1>Todo List</h1>
      {props.todos.map((todo) => (
        <div className="card mb-3" key={todo.id}>
          <div className="card-body">
            <h5 className="card-title">{todo.title}</h5>
            <p className="card-text">{todo.description}</p>
            <p className="card-text">Due Date: {todo.dueDate}</p>
            <button className="btn btn-primary" disabled={todo.isComplete}>Complete</button>
          </div>
        </div>
      ))}
    </div>
    );
}

export default Todo;