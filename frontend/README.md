# To-Do List App — Guía de inicio

Stack: **Next.js · Express · TypeScript · Tailwind CSS**

---

## Requisitos

- Node.js 18+
- npm 9+

---

## 1. Backend

```bash
cd backend
npm install
npm run dev
```

> Servidor corriendo en `http://localhost:3001`

**Variables de entorno** (`backend/.env`):
```
PORT=3001
FRONTEND_URL=http://localhost:3000
```

---

## 2. Frontend

Abrí una **nueva terminal**:

```bash
cd frontend
npm install
npm run dev
```

> App disponible en `http://localhost:3000`

**Variables de entorno** (`frontend/.env.local`):
```
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

---

## Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/tasks` | Obtener todas las tareas |
| GET | `/api/tasks/:id` | Obtener tarea por ID |
| POST | `/api/tasks` | Crear una tarea |
| PUT | `/api/tasks/:id` | Actualizar una tarea |
| DELETE | `/api/tasks/:id` | Eliminar una tarea |