import {
  useEffect,
  useState,
} from "react";

import { useParams } from "react-router-dom";

import api from "../api/axios";

import CreateTaskForm from "../components/CreateTaskForm";

import TaskColumn from "../components/TaskColumn";
import DashboardLayout from "../layouts/DashboardLayout";
import EditTaskModal from "../components/EditTaskModal";

import {
  DndContext,
  useDroppable,
} from "@dnd-kit/core";

function DroppableColumn({
  id,
  children,
}) {
  const { setNodeRef } =
    useDroppable({
      id,
    });

  return (
    <div ref={setNodeRef}>
      {children}
    </div>
  );
}

function ProjectDetailsPage() {
  const { id } = useParams();

  const [project, setProject] =
    useState(null);

  const [tasks, setTasks] =
    useState([]);
  const [editingTask, setEditingTask] =
  useState(null);

  // FETCH PROJECT
  const fetchProject = async () => {
    try {
      const response =
        await api.get(
          `/projects/${id}`
        );

      setProject(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // FETCH TASKS
  const fetchTasks = async () => {
    try {
      const response =
        await api.get(
          `/tasks/project/${id}`
        );

      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProject();
    fetchTasks();
  }, []);

  // CREATE TASK
  const createTask = async (
    formData
  ) => {
    try {
      const response =
        await api.post(
          "/tasks",
          {
            ...formData,
            projectId: Number(id),
          }
        );

      setTasks((prevTasks) => [
  response.data.task,
  ...prevTasks,
]);
    } catch (error) {
      console.log(error);
    }
  };

//update task
  const updateTask = async (
  formData
) => {
  try {
    const response =
      await api.put(
        `/tasks/${editingTask.id}`,
        formData
      );

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === editingTask.id
          ? response.data.task
          : task
      )
    );

    setEditingTask(null);
  } catch (error) {
    console.log(error);
  }
};

  // DELETE TASK
  const deleteTask = async (
    taskId
  ) => {
    try {
      await api.delete(
        `/tasks/${taskId}`
      );

      setTasks((prevTasks) =>
  prevTasks.filter(
    (task) =>
      task.id !== taskId
  )
);
    } catch (error) {
      console.log(error);
    }
  };

  if (!project) {
    return <p>Loading...</p>;
  }

  const handleDragEnd = async (
  event
) => {
  const { active, over } = event;

  if (!over) return;

  const taskId = active.id;

  const newStatus = over.id;

  try {
    await api.patch(
      `/tasks/${taskId}/status`,
      {
        status: newStatus,
      }
    );

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task
      )
    );
  } catch (error) {
    console.log(error);
  }
};

  return (
    <DashboardLayout>
    <div>
      {/* PROJECT HEADER */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          {project.name}
        </h1>

        <p className="text-gray-600 mt-2">
          {project.description}
        </p>
      </div>

      {/* CREATE TASK */}
      <CreateTaskForm
        onCreate={createTask}
      />

      {/* TASK BOARD */}
      <DndContext
  onDragEnd={handleDragEnd}
>
  <div className="grid md:grid-cols-3 gap-6 mt-8">
    <DroppableColumn id="TODO">
        <TaskColumn
          title="TODO"
          tasks={tasks.filter(
            (task) =>
              task.status === "TODO"
          )}
          onDelete={deleteTask}
          onEdit={setEditingTask}
        />
        </DroppableColumn>

        <DroppableColumn id="IN_PROGRESS">
        <TaskColumn
          title="IN_PROGRESS"
          tasks={tasks.filter(
            (task) =>
              task.status ===
              "IN_PROGRESS"
          )}
          onDelete={deleteTask}
          onEdit={setEditingTask}
        />
        </DroppableColumn>

       <DroppableColumn id="DONE">
        <TaskColumn
          title="DONE"
          tasks={tasks.filter(
            (task) =>
              task.status === "DONE"
          )}
          onDelete={deleteTask}
          onEdit={setEditingTask}
        />
        </DroppableColumn>
      </div>
      </DndContext>
      {editingTask && (
  <EditTaskModal
    task={editingTask}
    onUpdate={updateTask}
    onClose={() =>
      setEditingTask(null)
    }
  />
)}
   </div>
</DashboardLayout>
);
}

export default ProjectDetailsPage;