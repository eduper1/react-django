import React from "react";

function Form(){
    return(
        <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Add Task</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="title">Title:</label>
                  <input type="text" className="form-control" id="title" />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description:</label>
                  <textarea className="form-control" id="description" rows="3"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="dueDate">Due Date:</label>
                  <input type="date" className="form-control" id="dueDate" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Form;