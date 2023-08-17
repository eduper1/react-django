import React, {useState} from "react";

function Todo(props){
  const today = new Date().toISOString().slice(0, 10);
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 10); // Add 10 days to the current date
  const maxDateString = maxDate.toISOString().slice(0, 10);


  const [showRescheduleForm, setShowRescheduleForm] = useState(false);
  const [newDueDate, setNewDueDate] = useState('');

  const handleRescheduleDate = () => {
    // Display the reschedule form when the Reschedule button is clicked
    setShowRescheduleForm(true);
  };

  const handleInputChanges = (e) => {
    // Update the newDueDate state when the input field changes
    setNewDueDate(e.target.value);
  };

  const handleRescheduleSubmit = (e) => {
    e.preventDefault();
    // Call the props function to handle rescheduling with the newDueDate
    props.handleReschedule(props.id, newDueDate);
    // Hide the reschedule form after submitting
    setShowRescheduleForm(false);
  };
  
    return(
        <div className="container">
          <div className="row justify-content-center">

        {/* <div className="col-md-6"> */}

        <div className="card mb-3" key={props.id}>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            {props.reschedule_count > 0 && (
            <button type="button" className="btn btn-primary">
                Rescheduled: <span className="badge badge-light">{props.reschedule_count}</span>
            </button>
            // <p className="card-text">Reschedule Count: {props.reschedule_count}</p>
            )}
            <p className="card-text">{props.description}</p>
            <p className="card-text">Due Date: {props.dueDate}</p>
            {!props.isCompleted && props.dueDate < props.currentDate ? (
              <div className="d-flex justify-content-between" role="group" aria-label="scheduleStatus">
                <button className="btn btn-warning" onClick={() => handleRescheduleDate()}>Reschedule</button>
                <button className="btn btn-danger" onClick={() => props.handleDelete(props.id)}>Delete</button>
              </div>
            ):(
              <button className={!props.isComplete ? "btn btn-primary":"btn btn-success"} disabled={props.isComplete} onClick={()=> props.toggleCompleteBtn(props.id)} >{!props.isComplete ? "Complete":"Completed"}</button>
            )}

            {showRescheduleForm && (
              <form onSubmit={handleRescheduleSubmit}>
                <div className="form-group">
                  <label htmlFor="dueDate">Due Date:</label>
                  <input type="date" name="date" value={newDueDate} className="form-control" id="dueDate" min={today} max={maxDateString} onChange={handleInputChanges} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            )}
          </div>
        </div>
          {/* </div> */}
        </div>
    </div>
    );
}

export default Todo;