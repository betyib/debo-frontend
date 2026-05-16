import {
  useDraggable,
} from "@dnd-kit/core";

function DraggableTask({
  task,
  onDelete,
  onEdit,
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
  } = useDraggable({
    id: task.id,
    data: {
      task,
    },
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white rounded-xl p-4 shadow"
    >
      {/* DRAG HANDLE */}
      <div
        {...listeners}
        {...attributes}
        className="cursor-grab mb-3 text-gray-400 text-sm"
      >
        Drag Task
      </div>

      <h3 className="font-bold">
        {task.title}
      </h3>

      <p className="text-gray-600 mt-2">
        {task.description}
      </p>

      <p className="mt-2 text-sm">
        Priority: {task.priority}
      </p>

      <div className="flex gap-4 mt-4">
        <button
          onClick={() => onEdit(task)}
          className="text-blue-500"
        >
          Edit
        </button>

        <button
          onClick={() =>
            onDelete(task.id)
          }
          className="text-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

function TaskColumn({
  title,
  tasks,
  onDelete,
  onEdit,
}) {
  return (
    <div className="bg-blue-100 rounded-2xl p-4 min-h-[120px]">
      <h2 className="text-2xl font-bold mb-4">
        {title}
      </h2>

      <div className="space-y-4">
        {tasks.map((task) => (
          <DraggableTask
            key={task.id}
            task={task}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskColumn;