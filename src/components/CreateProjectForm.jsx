import { useState } from "react";

function CreateProjectForm({
  onCreate,
}) {
  const [formData, setFormData] =
    useState({
      name: "",
      description: "",
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
      name: "",
      description: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow mb-8"
    >
      <h2 className="text-2xl font-bold mb-4">
        Create Project
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Project Name"
        value={formData.name}
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

      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg"
      >
        Create
      </button>
    </form>
  );
}

export default CreateProjectForm;