import React, { useState } from 'react';

function FilterBtn() {
  const [isDisplayed, setIsDisplayed] = useState('active');

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className="btn-group mb-3 mt-3" role="group" aria-label="Todo Status">
          <button type="button" className={`btn btn-primary ${isDisplayed === 'active' ? 'active':''}`} onClick={(active) => setIsDisplayed('active')}>Active</button>
          <button type="button" className={`btn btn-success ${isDisplayed === 'complete' ? 'complete':''}`}onClick={(complete) => setIsDisplayed('complete')}>Complete</button>
          <button type="button" className={`btn btn-danger ${isDisplayed === 'duePast' ? 'duePast':''}`}onClick={(duePast) => setIsDisplayed('duePast')}>Due past</button>
        </div>
      </div>
      {/* Display linked information based on activeButton */}
      {isDisplayed === 'active' && <div>Active Todos</div>}
      {isDisplayed === 'complete' && <div>Complete Todos</div>}
      {isDisplayed === 'duePast' && <div>Due Past Todos</div>}
    </div>
  );
}

export default FilterBtn;
