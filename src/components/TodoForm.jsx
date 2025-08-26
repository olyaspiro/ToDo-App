import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Add a new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          padding: '8px',
          width: '70%',
          marginRight: '5px',
          border: input ? '2px solid #28a745' : '2px solid #ccc',
          borderRadius: '5px',
          transition: 'border 0.3s ease',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '8px 12px',
          border: 'none',
          backgroundColor: '#28a745',
          color: '#fff',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
