import React, { useState } from 'react';
import "./TodoList.css";
import AddTodo from './AddTodo';

const TodoList = () => {
  const [todo, setTodo] = useState([]);

  const addTodo = (newTodo) => {
    setTodo([...todo, newTodo]);
  };

  return (
    <div>
      <AddTodo addTodo={addTodo} />
      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>{todo.description} - {todo.priority}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
