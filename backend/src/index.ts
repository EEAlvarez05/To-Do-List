import app from "./app";

const PORT: number = parseInt(process.env.PORT || "3001");

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
  console.log(`📋 Tasks API: http://localhost:${PORT}/api/tasks`);
});