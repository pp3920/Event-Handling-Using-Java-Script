import type { TaskItemProps, TaskStatus } from "../../types";


const TaskItem = ({ task, onStatusChange, onDelete }: TaskItemProps) => {
  return (
    <div style={styles.card}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>

      {/* Status Dropdown */}
      <select
        value={task.status}
        onChange={(e) =>
          onStatusChange(task.id, e.target.value as TaskStatus)
        }
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      {/* Delete */}
      <button onClick={() => onDelete(task.id)} style={styles.delete}>
        Delete
      </button>

      {/* Priority + Date */}
      <p style={{ color: getPriorityColor(task.priority) }}>
        Priority: {task.priority}
      </p>
      <p>Due: {task.dueDate}</p>
    </div>
  );
};

const getPriorityColor = (priority: string) => {
  if (priority === "high") return "red";
  if (priority === "medium") return "orange";
  return "green";
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "8px",
  },
  delete: {
    color: "red",
    marginLeft: "10px",
  },
};

export default TaskItem;