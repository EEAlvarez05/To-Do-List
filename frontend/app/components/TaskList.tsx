"use client";

import { Task } from "@/types/task";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onToggle: (task: Task) => void;
  onDelete: (id: number) => void;
  onEdit: (task: Task) => void;
}

export default function TaskList({ tasks, onToggle, onDelete, onEdit }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-10 text-gray-400 text-[15px]">
        🎉 No tasks yet. Add one above!
      </div>
    );
  }

  const pending: Task[] = tasks.filter((t) => !t.completed);
  const completed: Task[] = tasks.filter((t) => t.completed);

  return (
    <div className="flex flex-col">
      {pending.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
      ))}

      {completed.length > 0 && pending.length > 0 && (
        <div className="flex items-center gap-2 my-2 text-gray-300 text-xs font-semibold uppercase tracking-widest">
          <span className="flex-1 h-px bg-gray-100" />
          <span>Completed ({completed.length})</span>
          <span className="flex-1 h-px bg-gray-100" />
        </div>
      )}

      {completed.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
}