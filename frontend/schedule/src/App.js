/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/no-redundant-roles */
import Form from "./componets/Forms";
import Todo from "./componets/Tod";
import FilterBtn from "./componets/FilterBtns";
import React, {useState} from "react";


function App() {
  function addSchedule (){
    console.log(' Submitted!');
  }
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

  const [todos] = useState(initialTodos);
    
    const TaskList = todos.map((todo)=> (
      <Todo
      id={todo.id}
      title={todo.title}
      description={todo.description}
      dueDate={todo.dueDate}
      isComplete={todo.isComplete}
      />
    ));

  return (
    <div className="container">
      <Form addSchedule={addSchedule} />
      <FilterBtn />
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
          {TaskList}
        
      </ul>
    </div>
  );
}

export default App;
