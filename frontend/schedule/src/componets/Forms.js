import { useState } from "react";
import React from "react";

function Form(props){
  const today = new Date().toISOString().slice(0, 10);
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 10); // Add 10 days to the current date
  const maxDateString = maxDate.toISOString().slice(0, 10);

  const [FormData, setFormData] = useState({
    title:'',
    description:'',
    date:today,
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  function handleSubmit(e){
    e.preventDefault();

    // Check if any field is empty
    if (!FormData.title.trim() || !FormData.description.trim() || !FormData.date.trim()) {
    alert("Please fill in all fields.");
    return;
  }
    
    console.log("Submitted.")
    props.addSchedule(FormData);
    
    setFormData({
      title: '',
      description: '',
      date: today,
    });
    setIsFormSubmitted(true);
    // Reset success message after 2 seconds
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 1500);
    
  }
  
  function handleInputChanges(e){
    const{name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name] : value,
    }));
    // console.log(e.target.value);
  };

    return(
        <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Add Task</h5>
              <form onSubmit={handleSubmit} className={isFormSubmitted ? "was-validated" : ""}>
        {isFormSubmitted && (
          <div className="alert alert-success" role="alert">
            Form submitted successfully!
          </div>
        )}
                <div className="form-group">
                  <label htmlFor="title" >Title:</label>
                  <input type="text" name="title" value={FormData.title} className='form-control' id="title" onChange={handleInputChanges} />
                </div>
                <div className="form-group">
                  <label htmlFor="description" >Description:</label>
                  <textarea className='form-control' name="description" value={FormData.description} id="description" rows="3"onChange={handleInputChanges} ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="dueDate">Due Date:</label>
                  <input type="date" name="date" value={FormData.date} className='form-control' id="dueDate" min={today} max={maxDateString} onChange={handleInputChanges} />
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