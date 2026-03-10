import { Request, Response } from "express";
import { Task } from "../types/task";
import { tasks, nextId, incrementId } from "../types/store";

// GET /api/tasks
export function getAllTasks(req: Request, res: Response): void {
  res.json(tasks);
}

// GET /api/tasks/:id
export function getTaskById(req: Request, res: Response): void {
  const id = parseInt(req.params.id as string);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    res.status(404).json({ error: "Task not found" });
    return;
  }

  res.json(task);
}

// POST /api/tasks
export function createTask(req: Request, res: Response): void {
  const { title, completed = false } = req.body;

  if (!title || typeof title !== "string" || title.trim() === "") {
    res.status(400).json({ error: "Title is required and must be a non-empty string" });
    return;
  }

  const newTask: Task = {
    id: nextId,
    title: title.trim(),
    completed,
  };

  tasks.push(newTask);
  incrementId();

  res.status(201).json(newTask);
}

// PUT /api/tasks/:id
export function updateTask(req: Request, res: Response): void {
  const id = parseInt(req.params.id as string);
  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    res.status(404).json({ error: "Task not found" });
    return;
  }

  const { title, completed } = req.body;

  if (title !== undefined && (typeof title !== "string" || title.trim() === "")) {
    res.status(400).json({ error: "Title must be a non-empty string" });
    return;
  }

  if (completed !== undefined && typeof completed !== "boolean") {
    res.status(400).json({ error: "Completed must be a boolean" });
    return;
  }

  tasks[index] = {
    ...tasks[index],
    ...(title !== undefined && { title: title.trim() }),
    ...(completed !== undefined && { completed }),
  };

  res.json(tasks[index]);
}

// DELETE /api/tasks/:id
export function deleteTask(req: Request, res: Response): void {
  const id = parseInt(req.params.id as string);
  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    res.status(404).json({ error: "Task not found" });
    return;
  }

  const deleted = tasks.splice(index, 1)[0];
  res.json({ message: "Task deleted successfully", task: deleted });
}