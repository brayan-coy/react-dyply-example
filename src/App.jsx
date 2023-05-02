import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import { task as data } from './Task';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks((prevTasks) => [...prevTasks, {
      id: prevTasks.length + 1,
      ...task
    }]);
  }

  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
  }

  function updateTask(id, updatedTask) {
    setTasks((prevTasks) => prevTasks.map(task => {
      if (task.id === id) {
        return { ...task, ...updatedTask };
      }
      return task;
    }));
  }

  return (
    <div className="bg-blue-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-4">
        <h1 className="text-2xl font-bold mb-4">Tareas</h1>
        <TaskForm createTask={createTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
      </div>
    </div>
  );
}

export default App;
