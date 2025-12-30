import { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './App.css'; // We will add styles in Step 4

function App() {
  // State to manage the list of to-do items 
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Event handling for adding a new item [cite: 25]
  const addTask = () => {
    if (input.trim() === "") return; // Prevent empty tasks
    
    const newTask = {
      id: Date.now(), // Unique key generation
      text: input,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setInput(""); // Clear input field
  };

  // Event handling for deleting an item [cite: 27]
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Event handling for marking as completed [cite: 26]
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Feature to edit existing items [cite: 28]
  const editTask = (id, newText) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  return (
    <div className="app-container">
      {/* Header Component  */}
      <Header />
      
      <div className="input-container">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Add a new task..."
        />
        <button onClick={addTask} className="add-btn">Add</button>
      </div>

      {/* ToDoList Component with props passed down [cite: 14, 18] */}
      <ToDoList 
        tasks={tasks} 
        deleteTask={deleteTask} 
        toggleComplete={toggleComplete} 
        editTask={editTask}
      />
    </div>
  );
}

export default App;