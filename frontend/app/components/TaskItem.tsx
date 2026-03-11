import { Task } from "@/types/task";

interface Props {
  task: Task;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export default function TaskItem({ task, toggleTask, deleteTask }: Props) {
  return (
    <div className="flex items-center gap-3 py-3 px-2 border-b border-gray-100 last:border-none hover:bg-gray-50 rounded-3xl transition-colors group">
      {/* Checkbox */}
      <button
        onClick={() => toggleTask(task.id)}
        className={`w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-200 hover:scale-110 ${
          task.completed
            ? "bg-orange-500 border-orange-500"
            : "bg-transparent border-gray-300 hover:border-orange-400"
        }`}
      >
        {task.completed && (
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </button>

      {/* Title */}
      <span
        className={`flex-1 text-[15px] cursor-pointer transition-colors ${
          task.completed
            ? "line-through text-gray-400"
            : "text-gray-800 hover:text-orange-500"
        }`}
      >
        {task.title}
      </span>

      {/* Delete */}
      <button
        onClick={() => deleteTask(task.id)}
        className="p-1.5 rounded-lg text-gray-300 hover:text-red-500 hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100"
      >
        <svg
          className="w-4.5 h-4.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6l-1 14H6L5 6" />
          <path d="M10 11v6M14 11v6" />
          <path d="M9 6V4h6v2" />
        </svg>
      </button>
    </div>
  );
}
