import React from 'react';

function FilterBtn() {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className="btn-group mb-3 mt-3" role="group" aria-label="Todo Status">
          <button type="button" className="btn btn-primary">Active</button>
          <button type="button" className="btn btn-success">Complete</button>
          <button type="button" className="btn btn-danger">Due past</button>
        </div>
      </div>
    </div>
  );
}

export default FilterBtn;
