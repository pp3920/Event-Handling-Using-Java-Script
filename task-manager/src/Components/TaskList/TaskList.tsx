
import type { TaskListProps } from "../../types";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ tasks, onStatusChange, onDelete }: TaskListProps) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id} 
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;