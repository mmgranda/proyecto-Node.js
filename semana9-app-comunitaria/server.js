require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "App Comunitaria";
const APP_ENV = process.env.APP_ENV || "development";

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <h1>${APP_NAME}</h1>
    <p>Aplicación levantada correctamente en entorno: ${APP_ENV}</p>
    <p>Clase 41 - Entorno de despliegue y primer levantamiento</p>
  `);
});

app.get("/saludo", (req, res) => {
  res.json({
    mensaje: "Hola. La aplicación comunitaria está respondiendo correctamente.",
    clase: 41,
    semana: 9
  });
});

app.get("/estado", (req, res) => {
  res.json({
    estado: "activo",
    servicio: APP_NAME,
    entorno: APP_ENV,
    puerto: PORT,
    fecha: new Date().toISOString()
  });
});

app.get("/api/info", (req, res) => {
  res.json({
    programa: "Capacitación en Democracia y Tecnología",
    alias: "Programadores para la Paz",
    modulo: "Sistemas Operativos de Código Abierto y Seguridad Digital",
    semana: 9,
    clase: 41,
    tema: "Entorno de despliegue y primer levantamiento"
  });
});

app.use((req, res) => {
  res.status(404).json({
    error: "Ruta no encontrada",
    mensaje: "Verifique la dirección consultada."
  });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado correctamente`);
  console.log(`Aplicación: ${APP_NAME}`);
  console.log(`Entorno: ${APP_ENV}`);
  console.log(`Puerto: ${PORT}`);
});
