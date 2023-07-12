/* eslint-disable jsx-a11y/no-redundant-roles */
import Form from "./componets/Forms";
import Todo from "./componets/Tod";
import FilterBtn from "./componets/FilterBtns";
import React from "react";


function App() {
  const todos = [
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
    // Add more todo items as needed
  ];
  return (
    <div className="container">
      <Form/>
      <FilterBtn />
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">

          <Todo todos={todos} />
        
      </ul>
    </div>
  );
}

export default App;
