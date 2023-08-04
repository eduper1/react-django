import React from "react";

function Todo(props){
    return(
        <div className="container">
          <div className="row justify-content-center">

        {/* <div className="col-md-6"> */}

        <div className="card mb-3" key={props.id}>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text">Due Date: {props.dueDate}</p>
            <button className="btn btn-primary" disabled={props.isCompleted} onClick={()=> props.toggleCompleteBtn(props.id)} >{!props.isComplete ? "Progress":"Completed"}</button>
          </div>
        </div>
          {/* </div> */}
        </div>
    </div>
    );
}

export default Todo;