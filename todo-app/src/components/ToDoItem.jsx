import React, { useState } from 'react';

const ToDoItem = ({ task, deleteTask, toggleComplete, editTask }) => {
  // Local state to handle edit mode
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleSave = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        // Edit Mode View
        <div className="edit-mode">
          <input 
            type="text" 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)} 
          />
          <button onClick={handleSave} className="save-btn">Save</button>
        </div>
      ) : (
        // Display Mode View
        <>
          <span onClick={() => toggleComplete(task.id)} className="task-text">
            {task.text}
          </span>
          <div className="actions">
            <button onClick={() => setIsEditing(true)} className="edit-btn">Edit</button>
            <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
            <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => toggleComplete(task.id)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ToDoItem;