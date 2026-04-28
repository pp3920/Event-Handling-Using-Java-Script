import type { TaskFilterProps, TaskStatus } from "../../types";

const TaskFilter = ({ onFilterChange }: TaskFilterProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      {/* Status Filter */}
      <select
        onChange={(e) =>
          onFilterChange({ status: e.target.value as TaskStatus })
        }
      >
        <option value="">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      {/* Priority Filter */}
      <select
        onChange={(e) =>
          onFilterChange({ priority: e.target.value as any })
        }
        style={{ marginLeft: "10px" }}
      >
        <option value="">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};

export default TaskFilter;