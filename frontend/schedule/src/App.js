/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/no-redundant-roles */
//Todo debug view point and align components
import Form from "./componets/Forms";
import Todo from "./componets/Tod";
import FilterBtn from "./componets/FilterBtns";
import React, {useState} from "react";


function App() {
  // List of schedule
  const [initialTodos, setinitialTodos] = useState([
    // {
    //   id: 1,
    //   title: 'Task 1',
    //   description: 'Description 1',
    //   dueDate: '2023-07-05',
    //   isComplete: false,
    // },
    // {
    //   id: 2,
    //   title: 'Task 2',
    //   description: 'Description 2',
    //   dueDate: '2023-07-06',
    //   isComplete: true,
    // },
  ]);
  // console.log(initialTodos);
  fetch('http://127.0.0.1:8001/schedule/api')
  .then(response => response.json())
  .then(data=> {
    console.log(data);
    setinitialTodos(data)
  })
  .catch(error=>console.log(error))
  
  const [todos, settodos] = useState(initialTodos);
  const [isDisplayed, setIsDisplayed] = useState('active');

  
  function addSchedule (data){
    const newTodo = {id:'id', title:data.title, description:data.description, dueDate:data.date, isComplete: false };
    settodos([...todos, newTodo]);
  }
// TODO debug toggleCompleteBtn and related BTN HTML in Tod.js
  function toggleCompleteBtn (id){
    const updateSchedule = todos.map((schedule) => {
      if (id === schedule.id){
        return {...schedule, isComplete: !schedule.isComplete};
      }
      return schedule;
    });
    settodos(updateSchedule);
  }
    // Get the current date in ISO string format
  const currentDate = new Date().toISOString().slice(0, 10);
  const filerActive = todos.filter(todo => todo.isComplete === false && todo.dueDate > currentDate);
  const filerComplete = todos.filter(todo => todo.isComplete === true);
  const filerDueDate = todos.filter(todo => todo.isComplete === false && todo.dueDate < currentDate); 


  return (
    <div className="container">
      <h1 className="row justify-content-center" >Schedule</h1>
      <Form addSchedule={addSchedule} />
      <FilterBtn isDisplayed={isDisplayed} setIsDisplayed={setIsDisplayed}/>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <ul
            role="list"
            className="todo-list stack-large stack-exception"
            aria-labelledby="list-heading">
              {/* {TaskList} */}
            {/* Display linked information based on activeButton */}
            {isDisplayed === 'active' && filerActive.map(todo => (
              <div>
                <Todo
                  id={todo.id}
                  title={todo.title}
                  description={todo.description}
                  dueDate={todo.dueDate}
                  isComplete={todo.isComplete}
                  toggleCompleteBtn={toggleCompleteBtn}
                  />
              </div>
              
              ))}
            
            {isDisplayed === 'complete' && filerComplete.map(todo => (
              <div>
                <Todo
                  id={todo.id}
                  title={todo.title}
                  description={todo.description}
                  dueDate={todo.dueDate}
                  isComplete={todo.isComplete}
                  toggleCompleteBtn={toggleCompleteBtn}
                  />
              </div>))}
            {isDisplayed === 'duePast' && filerDueDate.map(todo => (
              <div>
                <Todo
                  id={todo.id}
                  title={todo.title}
                  description={todo.description}
                  dueDate={todo.dueDate}
                  isComplete={todo.isComplete}
                  toggleCompleteBtn={toggleCompleteBtn}
                  />
              </div>))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
