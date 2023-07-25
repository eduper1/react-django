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
  const initialTodos = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description 1',
      dueDate: '2023-07-05',
      isComplete: false,
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description 2',
      dueDate: '2023-07-06',
      isComplete: true,
    },
  ];
  
  const [todos, settodos] = useState(initialTodos);
  const [isDisplayed, setIsDisplayed] = useState('active');

  
  function addSchedule (data){
    const newTodo = {id:'id', title:data.title, description:data.description, dueDate:data.date, isComplete: false };
    settodos([...todos, newTodo]);
  }

  function toggleCompleteBtn (id){
    const updateSchedule = todos.map((schedule) => {
      if (id === schedule.id){
        return {...schedule, isComplete: !schedule.isComplete};
      }
      return schedule;
    });
    settodos(updateSchedule);
  }
  const filerActive = todos.filter(todo => todo.isComplete === false);
  // const TaskList = todos.map((todo)=> (
  //   <Todo
  //     id={todo.id}
  //     title={todo.title}
  //     description={todo.description}
  //     dueDate={todo.dueDate}
  //     isComplete={todo.isComplete}
  //     toggleCompleteBtn={toggleCompleteBtn}
  //     />
  //   ));

  return (
    <div className="container">
      <Form addSchedule={addSchedule} />
      <FilterBtn isDisplayed={isDisplayed} setIsDisplayed={setIsDisplayed}/>
      <h1 className="row justify-content-center" >Schedule</h1>
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
            
            {isDisplayed === 'complete' && <div>Complete Todos</div>}
            {isDisplayed === 'duePast' && <div>Due Past Todos</div>}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
