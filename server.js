const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let tareas = [
  { id: 1, titulo: 'Aprender Git', completada: true },
  { id: 2, titulo: 'Aprender GitHub', completada: false },
];

app.get('/api/tareas', (req, res) => {
  res.json(tareas);
});

app.post('/api/tareas', (req, res) => {
  const { titulo } = req.body;
  if (!titulo) {
    return res.status(400).json({ error: 'El título es obligatorio' });
  }
  const nueva = { id: Date.now(), titulo, completada: false };
  tareas.push(nueva);
  res.status(201).json(nueva);
});

app.put('/api/tareas/:id', (req, res) => {
  const tarea = tareas.find(t => t.id === Number(req.params.id));
  if (!tarea) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }
  tarea.completada = true;
  res.json(tarea);
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});