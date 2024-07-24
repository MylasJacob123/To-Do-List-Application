import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import SearchBar from './SearchBar';
import "../components/home.css";

const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo =>
    todo.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='home-display'>
      <h2 className="home-heading">To-Do Items</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AddTodo addTodo={addTodo} />
      <div>
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
