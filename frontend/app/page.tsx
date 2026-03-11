"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Task } from "@/types/task";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // cargar tareas desde el backend
  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch(`${API_URL}/api/tasks`);
      const data = await res.json();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  // crear tarea
  const addTask = async (title: string) => {
    const res = await fetch(`${API_URL}/api/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    const newTask: Task = await res.json();

    setTasks((prev) => [...prev, newTask]);
  };

  // completar tarea
  const toggleTask = async (id: string) => {
    const task = tasks.find((t) => t.id === id);

    const res = await fetch(`${API_URL}/api/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !task?.completed,
      }),
    });

    const updated: Task = await res.json();

    setTasks((prev) => prev.map((task) => (task.id === id ? updated : task)));
  };

  // eliminar tarea
  const deleteTask = async (id: string) => {
    await fetch(`${API_URL}/api/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <main className="min-h-screen bg-gray-800 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl p-10 w-full max-w-md shadow-2xl">
        <Header />
        <p className="text-gray-500 text-sm mb-4">
          {completedTasks} of {tasks.length} tasks completed
        </p>
        <TaskForm addTask={addTask} />
        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      </div>
    </main>
  );
}
