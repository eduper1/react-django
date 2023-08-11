/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/no-redundant-roles */
//Todo debug view point and align components
import Form from "./componets/Forms";
import Todo from "./componets/Tod";
import FilterBtn from "./componets/FilterBtns";
import React, {useEffect, useState} from "react";


function App() {
  
  const [todos, settodos] = useState([]);
  // console.log(todos.map(t => console.log("API Todos: ", t.isCompleted)));
  const [isDisplayed, setIsDisplayed] = useState('active');

    // useEffect hook
  useEffect(() =>{
    fetch('http://127.0.0.1:8000/schedule/api')
    .then(response => response.json())
    .then(data=> {
      // console.log(data);
      settodos(data);
    })
    .catch(error=>console.log(error))
    
  },[])
  

  
  function addSchedule (data){
    // const newTodo = {id:'id', title:data.title, description:data.description, dueDate:data.date, isComplete: false };
    fetch('http://127.0.0.1:8000/schedule/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: data.title,
      description: data.description,
      created_at: new Date().toLocaleString(),
      dueDate: data.dueDate,
      isCompleted: false,
    }),
  })
    .then(response => response.json())
    .then(data => {
      // Assuming that 'data' is the newly created schedule from the API
      // Add the new schedule to the existing 'todos' array using the 'settodos' function
      settodos([...todos, data]);
    })
    .catch(error => console.log(error));
    // settodos([...todos, newTodo]);
  }
// TODO debug toggleCompleteBtn and related BTN HTML in Tod.js
  function toggleCompleteBtn (id){
    const updateSchedule = todos.map((schedule) => {
      if (id === schedule.id){
        return {...schedule, isCompleted: !schedule.isCompleted};
      }
      return schedule;
    });
    settodos(updateSchedule);
  }
    // Get the current date in ISO string format
  const currentDate = new Date().toISOString().slice(0, 10);
  const filerActive = todos.filter(todo => todo.isCompleted === false && todo.dueDate > currentDate);
  const filerComplete = todos.filter(todo => todo.isCompleted === true);
  const filerDueDate = todos.filter(todo => todo.isCompleted === false && todo.dueDate < currentDate); 


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
              <div key={todo.id}>
                <Todo
                  id={todo.id}
                  title={todo.title}
                  description={todo.description}
                  dueDate={todo.dueDate}
                  isComplete={todo.isCompleted}
                  toggleCompleteBtn={toggleCompleteBtn}
                  />
              </div>
              
              ))}
            
            {isDisplayed === 'complete' && filerComplete.map(todo => (
              <div key={todo.id}>
                <Todo
                  id={todo.id}
                  title={todo.title}
                  description={todo.description}
                  dueDate={todo.dueDate}
                  isComplete={todo.isCompleted}
                  toggleCompleteBtn={toggleCompleteBtn}
                  />
              </div>))}
            {isDisplayed === 'duePast' && filerDueDate.map(todo => (
              <div key={todo.id}>
                <Todo
                  id={todo.id}
                  title={todo.title}
                  description={todo.description}
                  dueDate={todo.dueDate}
                  isComplete={todo.isCompleted}
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
