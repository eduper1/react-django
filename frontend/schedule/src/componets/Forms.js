import React from "react";

function Form(props){
  function handleSubmit(e){
    e.preventDefault();
    props.addSchedule();
  }

  function handleChanges(e){
    console.log(e.target.value);
  }

    return(
        <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Add Task</h5>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Title:</label>
                  <input type="text" className="form-control" id="title" onChange={handleChanges} />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description:</label>
                  <textarea className="form-control" id="description" rows="3"onChange={handleChanges} ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="dueDate">Due Date:</label>
                  <input type="date" className="form-control" id="dueDate" onChange={handleChanges} />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Form;