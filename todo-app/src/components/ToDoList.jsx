import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, deleteTask, toggleComplete, editTask }) => {
  return (
    <div className="todo-list">
      {tasks.length === 0 ? <p>No tasks yet!</p> : null}
      
      {/* Render list dynamically using map  */}
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
        />
      ))}
    </div>
  );
};

export default ToDoList;