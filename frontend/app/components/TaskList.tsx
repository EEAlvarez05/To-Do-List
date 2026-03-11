import TaskItem from "./TaskItem";
import { Task } from "@/types/task";

interface Props {
  tasks: Task[];
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export default function TaskList({ tasks, toggleTask, deleteTask }: Props) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-10 text-gray-400 text-[15px]">
        No tasks yet. Add one above!
      </div>
    );
  }
  const pending = tasks.filter((t) => !t.completed);
  const completed = tasks.filter((t) => t.completed);

  return (
    <div className="flex flex-col">
      {pending.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}

      {completed.length > 0 && pending.length > 0 && (
        <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold uppercase tracking-widest my-2">
          <span className="flex-1  bg-gray-100 "></span>
          <span className="flex-1  bg-gray-100">
            Completed ({completed.length})
          </span>
          <span className="flex-1  bg-gray-100"></span>
        </div>
      )}

      {completed.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}
