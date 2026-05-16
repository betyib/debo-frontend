import { Link } from "react-router-dom";

function ProjectCard({
  project,
  onDelete,
  onEdit,
}) {
  return (
    <div className="bg-white rounded-2xl border border-blue-100 p-6 hover:shadow-md transition-all">
      <div className="flex justify-between items-start">
        <div>
          <Link to={`/projects/${project.id}`}>
            <h2 className="text-xl font-bold hover:text-blue-500">
              {project.name}
            </h2>
          </Link>

          <p className="text-gray-600 mt-2">
            {project.description}
          </p>
        </div>
        <button
  onClick={() => onEdit(project)}
  className="text-blue-500 mr-4"
>
  Edit
</button>

        <button
          onClick={() => onDelete(project.id)}
          className="text-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;