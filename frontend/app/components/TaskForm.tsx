"use client";
import { useState } from "react";

interface Props {
  addTask: (title: string) => void;
}
export default function TaskForm({ addTask }: Props) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex rounded-full overflow-hidden bg-gray-100 mb-4">
      <input
        type="text"
        placeholder="Add your task"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 bg-transparent px-5 py-3.5 text-[15px] text-gray-700 placeholder-gray-400 outline-none"
      />
      <div>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold px-6 py-3.5 rounded-full text-[15px] tracking-wide transition-all duration-150 whitespace-nowrap"
        >
          ADD +
        </button>
      </div>
    </form>
  );
}
