import {
  useEffect,
  useState,
} from "react";

import api from "../api/axios";

import DashboardLayout from "../layouts/DashboardLayout";

import CreateProjectForm from "../components/CreateProjectForm";

import ProjectCard from "../components/ProjectCard";
import EditProjectModal from "../components/EditProjectModal";

function DashboardPage() {
  const [projects, setProjects] =
    useState([]);

    const [tasks, setTasks] =
  useState([]);
  const [search, setSearch] =
  useState("");

  const [loading, setLoading] =
    useState(true);
    const [editingProject, setEditingProject] =
  useState(null);
  
const filteredProjects =
  projects.filter((project) =>
    project.name
      .toLowerCase()
      .includes(
        search.toLowerCase()
      )
  );
  

  // FETCH PROJECTS
  const fetchProjects = async () => {
    try {
      const response =
        await api.get("/projects");

      setProjects(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTasks = async () => {
  try {
    const projectsResponse =
      await api.get("/projects");

    const allProjects =
      projectsResponse.data;

    let allTasks = [];

    for (const project of allProjects) {
      const tasksResponse =
        await api.get(
          `/tasks/project/${project.id}`
        );

      allTasks = [
        ...allTasks,
        ...tasksResponse.data,
      ];
    }

    setTasks(allTasks);
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    fetchProjects();
    fetchTasks();
  }, []);

  // CREATE PROJECT
  const createProject = async (
    formData
  ) => {
    try {
      const response =
        await api.post(
          "/projects",
          formData
        );

      setProjects((prevProjects) => [
        response.data.project,
        ...prevProjects,
      ]);
    } catch (error) {
      console.log(error);
    }
  };
//update project
  const updateProject = async (
  formData
) => {
  try {
    const response =
      await api.put(
        `/projects/${editingProject.id}`,
        formData
      );

    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id ===
        editingProject.id
          ? response.data.project
          : project
      )
    );

    setEditingProject(null);
  } catch (error) {
    console.log(error);
  }
};

  // DELETE PROJECT
  const deleteProject = async (
    projectId
  ) => {
    try {
      await api.delete(
        `/projects/${projectId}`
      );

      setProjects((prevProjects) =>
        prevProjects.filter(
          (project) =>
            project.id !== projectId
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout 
    search={search}
    setSearch={setSearch}>
      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-blue-100">
          <h2 className="text-gray-500">
            Total Projects
          </h2>

          <p className="text-4xl font-bold mt-2">
            {projects.length}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-gray-500">
            Active Tasks
          </h2>

          <p className="text-4xl font-bold mt-2">
            {
  tasks.filter(
    (task) =>
      task.status !== "DONE"
  ).length
}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-gray-500">
            Completed Tasks
          </h2>

          <p className="text-4xl font-bold mt-2">
            {
  tasks.filter(
    (task) =>
      task.status === "DONE"
  ).length
}
          </p>
        </div>
      </div>

      {/* CREATE PROJECT */}
      <CreateProjectForm
        onCreate={createProject}
      />

      {/* PROJECTS */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-6">
          Your Projects
        </h2>

        {loading ? (
          <p>Loading...</p>
        ) : filteredProjects.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl shadow text-center">
            <h3 className="text-2xl font-bold">
              No Projects Yet
            </h3>

            <p className="text-gray-500 mt-2">
              Create your first project to get started.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onDelete={deleteProject}
                onEdit={setEditingProject}
              />
            ))}
          </div>
        )}
        {editingProject && (
  <EditProjectModal
    project={editingProject}
    onUpdate={updateProject}
    onClose={() =>
      setEditingProject(null)
    }
  />
)}
      </div>
    </DashboardLayout>
  );
}

export default DashboardPage;