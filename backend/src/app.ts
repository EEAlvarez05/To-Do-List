import express, { Application } from "express";
import cors from "cors";
import tasksRouter from "./routes/tasks";
import { notFound, errorHandler } from "./middleware/errorHandler";

const app: Application = express();

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:3000" }));
app.use(express.json());

// Routes
app.use("/api/tasks", tasksRouter);

// Health check
app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

// Error handlers (must go last)
app.use(notFound);
app.use(errorHandler);

export default app;