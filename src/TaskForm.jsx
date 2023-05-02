import React, { useState, useEffect } from "react";

function TaskForm({ createTask, editTask, taskToEdit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskToEdit) {
      editTask(taskToEdit.id, { title, description });
    } else {
      createTask({ title, description });
    }

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="block mb-2">
        Título:
        <input
          type="text"
          placeholder="Escribe tu tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </label>
      <label className="block mb-2">
        Descripción:
        <textarea
          placeholder="Escribe la descripción de la tarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        {taskToEdit ? "Actualizar" : "Guardar"}
      </button>
    </form>
  );
}

export default TaskForm;
