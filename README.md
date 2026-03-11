# Todo List - Full Stack

Aplicación de lista de tareas desarrollada con:

- Frontend: Next.js + TypeScript + Tailwind
- Backend: Express + TypeScript

El frontend consume una API REST del backend para crear, completar y eliminar tareas.

---

# Requisitos

Tener instalado:

- Node.js (v18 o superior)
- npm

---

# 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
```

---

# 2. Instalar dependencias

Instalar dependencias del **backend**:

```bash
cd backend
npm install
```

Instalar dependencias del **frontend**:

```bash
cd ../frontend
npm install
```

---

# 3. Configurar variables de entorno

Dentro de la carpeta **frontend**, crear un archivo:

```
.env.local
```

Agregar:

```
NEXT_PUBLIC_API_URL=http://localhost:4000
```

---

# 4. Iniciar el backend

Desde la carpeta `backend` ejecutar:

```bash
npm run dev
```

El servidor se iniciará en:

```
http://localhost:4000
```

---

# 5. Iniciar el frontend

En otra terminal, desde la carpeta `frontend` ejecutar:

```bash
npm run dev
```

La aplicación se abrirá en:

```
http://localhost:3000
```

---

# Funcionalidades

- Crear tareas
- Marcar tareas como completadas
- Eliminar tareas
- Contador de tareas completadas

---

# API Endpoints

```
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
```

---

# Notas

- El backend utiliza un **array en memoria**, por lo que las tareas se reinician al reiniciar el servidor.
- No se utiliza base de datos en este proyecto.

# Screenshot
<img width="1919" height="1008" alt="image" src="https://github.com/user-attachments/assets/fefbc62f-e2ff-4028-a60a-e8f7e7fb3eda" />

  
