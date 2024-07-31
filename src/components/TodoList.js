import React, { useState } from 'react';
import "./TodoList.css";
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <AddTodo addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem 
              todo={todo} 
              updateTodo={updateTodo} 
              deleteTodo={deleteTodo} 
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
