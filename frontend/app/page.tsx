"use client";

import { useState, useEffect } from "react";
import { Task } from "@/types/task";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { createTask, deleteTask, getTasks, updateTask } from "@/lib/api";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => { fetchTasks(); }, []);

  async function fetchTasks(): Promise<void> {
    try {
      setLoading(true);
      const data = await getTasks();
      setTasks(data);
    } catch {
      setError("Could not load tasks. Is the backend running?");
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(title: string): Promise<void> {
    try {
      if (editingTask) {
        const updated = await updateTask(editingTask.id, { ...editingTask, title });
        setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
        setEditingTask(null);
      } else {
        const newTask = await createTask({ title, completed: false });
        setTasks((prev) => [...prev, newTask]);
      }
    } catch {
      setError("Failed to save task.");
    }
  }

  async function handleToggle(task: Task): Promise<void> {
    try {
      const updated = await updateTask(task.id, { ...task, completed: !task.completed });
      setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
    } catch {
      setError("Failed to update task.");
    }
  }

  async function handleDelete(id: number): Promise<void> {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch {
      setError("Failed to delete task.");
    }
  }

  const completedCount: number = tasks.filter((t) => t.completed).length;

  return (
    <main className="min-h-screen bg-[#1a1a1a] flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl p-10 w-full max-w-md shadow-2xl">

        {/* Header */}
        <div className="flex items-center gap-3 mb-1">
          <svg className="w-7 h-7 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <line x1="8" y1="15" x2="16" y2="15" />
          </svg>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">To-Do List</h1>
        </div>

        {/* Progress */}
        {tasks.length > 0 && (
          <p className="text-sm text-gray-400 mb-5 pl-0.5">
            {completedCount} of {tasks.length} tasks completed
          </p>
        )}

        {/* Error */}
        {error && (
          <div className="flex items-center justify-between bg-red-50 text-red-700 rounded-xl px-4 py-2.5 text-sm mb-4">
            <span>⚠️ {error}</span>
            <button onClick={() => setError(null)} className="text-red-400 hover:text-red-600 font-bold ml-3">✕</button>
          </div>
        )}

        {/* Form */}
        <TaskForm
          onSubmit={handleSubmit}
          editingTask={editingTask}
          onCancelEdit={() => setEditingTask(null)}
        />

        {/* Task list */}
        {loading ? (
          <div className="text-center py-8 text-gray-400 text-sm">Loading tasks...</div>
        ) : (
          <TaskList
            tasks={tasks}
            onToggle={handleToggle}
            onDelete={handleDelete}
            onEdit={setEditingTask}
          />
        )}
      </div>
    </main>
  );
}