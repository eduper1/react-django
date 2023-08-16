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
            {!props.isCompleted && props.dueDate < props.currentDate ? (
              <div className="d-flex justify-content-between" role="group" aria-label="scheduleStatus">
                <button className="btn btn-warning" onClick={() => props.handleReschedule(props.id)}>Reschedule</button>
                <button className="btn btn-danger" onClick={() => props.handleDelete(props.id)}>Delete</button>
              </div>
            ):(
              <button className={!props.isComplete ? "btn btn-primary":"btn btn-success"} disabled={props.isComplete} onClick={()=> props.toggleCompleteBtn(props.id)} >{!props.isComplete ? "Complete":"Completed"}</button>
            )}


          </div>
        </div>
          {/* </div> */}
        </div>
    </div>
    );
}

export default Todo;