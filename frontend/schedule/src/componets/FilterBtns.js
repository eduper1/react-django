import React, { useState } from 'react';

function FilterBtn(props) {

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className="btn-group mb-3 mt-3" role="group" aria-label="Todo Status">
          <button type="button" className={`btn btn-primary ${props.isDisplayed === 'active' ? 'active':''}`} onClick={(active) => props.setIsDisplayed('active')}>Active</button>
          <button type="button" className={`btn btn-success ${props.isDisplayed === 'complete' ? 'complete':''}`}onClick={(complete) => props.setIsDisplayed('complete')}>Complete</button>
          <button type="button" className={`btn btn-danger ${props.isDisplayed === 'duePast' ? 'duePast':''}`}onClick={(duePast) => props.setIsDisplayed('duePast')}>Due past</button>
        </div>
      </div>
      
    </div>
  );
}

export default FilterBtn;
