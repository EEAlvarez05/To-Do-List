import { Router } from "express"
import { tasks } from "../data/tasks"
import { Task } from "../models/task"
import { randomUUID } from "crypto"

const router = Router()

// GET ALL TASKS
router.get("/", (req, res) => {

  res.json(tasks)

})

// CREATE TASK
router.post("/", (req, res) => {

  const { title } = req.body

  if (!title) {
    return res.status(400).json({ error: "Title is required" })
  }

  const newTask: Task = {
    id: randomUUID(),
    title,
    completed: false,
    createdAt: new Date()
  }

  tasks.push(newTask)

  res.status(201).json(newTask)

})

// UPDATE TASK
router.put("/:id", (req, res) => {

  const { id } = req.params

  const task = tasks.find(t => t.id === id)

  if (!task) {
    return res.status(404).json({ error: "Task not found" })
  }

  task.title = req.body.title ?? task.title
  task.completed = req.body.completed ?? task.completed

  res.json(task)

})

// DELETE TASK
router.delete("/:id", (req, res) => {

  const { id } = req.params

  const index = tasks.findIndex(t => t.id === id)

  if (index === -1) {
    return res.status(404).json({ error: "Task not found" })
  }

  tasks.splice(index, 1)

  res.json({ message: "Task deleted" })

})

export default router