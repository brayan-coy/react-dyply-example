import React, { useState } from "react";
import TaskForm from "./TaskForm";

function TaskList({ tasks, deleteTask, updateTask }) {
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleDelete = (taskId) => {
    deleteTask(taskId);
  };

  const handleEdit = (task) => {
    setTaskToEdit(task);
  };

  const handleUpdate = (taskId, updatedTask) => {
    updateTask(taskId, updatedTask);
    setTaskToEdit(null);
  };

  const handleCancelEdit = () => {
    setTaskToEdit(null);
  };

  return (
    <ul className="mb-4">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center mb-2">
          <div className="mr-2">
            <strong>{task.title}</strong>
            <p>{task.description}</p>
          </div>
          <button
            onClick={() => handleDelete(task.id)}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Eliminar
          </button>
          <button
            onClick={() => handleEdit(task)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Editar
          </button>
        </li>
      ))}
      {taskToEdit && (
        <li>
          <TaskForm
            editTask={handleUpdate}
            taskToEdit={taskToEdit}
            onCancelEdit={handleCancelEdit}
          />
        </li>
      )}
    </ul>
  );
}

export default TaskList;
