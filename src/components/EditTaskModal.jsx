import {
  useState,
} from "react";

function EditTaskModal({
  task,
  onUpdate,
  onClose,
}) {
  const [formData, setFormData] =
    useState({
      title: task.title,
      description:
        task.description,
      status: task.status,
      priority: task.priority,
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

    onUpdate(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">
          Edit Task
        </h2>

        <form
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-blue-100 p-3 rounded-xl mb-4"
          />

          <textarea
            name="description"
            value={
              formData.description
            }
            onChange={handleChange}
            className="w-full border border-blue-100 p-3 rounded-xl mb-4"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border border-blue-100 p-3 rounded-xl mb-4"
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
            value={
              formData.priority
            }
            onChange={handleChange}
            className="w-full border border-blue-100 p-3 rounded-xl mb-4"
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

          <div className="flex gap-4 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl border"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTaskModal;