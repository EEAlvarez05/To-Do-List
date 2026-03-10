"use client";

import { useState, useEffect } from "react";
import { Task } from "@/types/task";

interface TaskFormProps {
  onSubmit: (title: string) => void;
  editingTask: Task | null;
  onCancelEdit: () => void;
}

export default function TaskForm({ onSubmit, editingTask, onCancelEdit }: TaskFormProps) {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (editingTask) setValue(editingTask.title);
    else setValue("");
  }, [editingTask]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onSubmit(trimmed);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex rounded-full overflow-hidden bg-gray-100 mb-7">
      <input
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        placeholder={editingTask ? "Edit your task..." : "Add your task"}
        autoFocus
        className="flex-1 bg-transparent px-5 py-3.5 text-[15px] text-gray-700 placeholder-gray-400 outline-none"
      />

      <div className="flex items-center">
        {editingTask && (
          <button
            type="button"
            onClick={() => { setValue(""); onCancelEdit(); }}
            className="px-4 py-3.5 text-sm font-semibold text-gray-400 hover:text-gray-600 transition-colors"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold px-6 py-3.5 rounded-full text-[15px] tracking-wide transition-all duration-150 whitespace-nowrap"
        >
          {editingTask ? "SAVE ✓" : "ADD +"}
        </button>
      </div>
    </form>
  );
}