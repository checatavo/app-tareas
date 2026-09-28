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

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});