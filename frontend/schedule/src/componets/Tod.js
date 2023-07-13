import React from "react";

function Todo(props){
    return(
        <div className="container">
      {/* {props.tod.map((todo) => ( */}
        <div className="card mb-3" key={props.id}>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text">Due Date: {props.dueDate}</p>
            <button className="btn btn-primary" disabled={props.isComplete}>Complete</button>
          </div>
        </div>
      {/* ))} */}
    </div>
    );
}

export default Todo;