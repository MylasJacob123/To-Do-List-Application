import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleAdd = () => {
    const newTodo = {
      id: Date.now(),
      description,
      priority
    };
    addTodo(newTodo);
    setDescription('');
    setPriority('Medium');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default AddTodo;