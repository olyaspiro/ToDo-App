import React, { useState } from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (!editText.trim()) return;
    editTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '10px 0',
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: todo.completed ? '#d4edda' : '#f8f9fa',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
    >
      {isEditing ? (
        <form onSubmit={handleEditSubmit} style={{ flex: 1, display: 'flex' }}>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            style={{ flex: 1, padding: '5px', marginRight: '5px', borderRadius: '5px' }}
          />
          <button
            type="submit"
            style={{
              padding: '5px 10px',
              border: 'none',
              backgroundColor: '#007bff',
              color: '#fff',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Save
          </button>
        </form>
      ) : (
        <>
          <span
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#155724' : '#343a40',
              flex: 1,
            }}
          >
            {todo.text}
          </span>
          <div style={{ display: 'flex', gap: '5px' }}>
            <button
              onClick={() => setIsEditing(true)}
              style={{
                padding: '5px 10px',
                border: 'none',
                backgroundColor: '#ffc107',
                color: '#fff',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to delete this todo?')) {
                  deleteTodo(todo.id);
                }
              }}
              style={{
                padding: '5px 10px',
                border: 'none',
                backgroundColor: '#dc3545',
                color: '#fff',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
