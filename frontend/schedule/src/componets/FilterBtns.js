import React from 'react';

function FilterBtn() {
  return (
    <div className="btn-group" role="group" aria-label="Todo Status">
      <button type="button" className="btn btn-primary">Active</button>
      <button type="button" className="btn btn-success">Complete</button>
      <button type="button" className="btn btn-danger">Due past</button>
    </div>
  );
}

export default FilterBtn;
