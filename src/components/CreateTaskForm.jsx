import { useState } from "react";

function CreateTaskForm({
  onCreate,
}) {
  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      status: "TODO",
      priority: "MEDIUM",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onCreate(formData);

    setFormData({
      title: "",
      description: "",
      status: "TODO",
      priority: "MEDIUM",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow"
    >
      <h2 className="text-2xl font-bold mb-4">
        Create Task
      </h2>

      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg mb-4"
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg mb-4"
      />

      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg mb-4"
      >
        <option value="TODO">
          TODO
        </option>

        <option value="IN_PROGRESS">
          IN_PROGRESS
        </option>

        <option value="DONE">
          DONE
        </option>
      </select>

      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg mb-4"
      >
        <option value="LOW">
          LOW
        </option>

        <option value="MEDIUM">
          MEDIUM
        </option>

        <option value="HIGH">
          HIGH
        </option>
      </select>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white transition-all px-6 py-3 rounded-lg"
      >
        Create Task
      </button>
    </form>
  );
}

export default CreateTaskForm;