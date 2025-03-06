const axios = require("axios");
const express = require('express');
const app = express();

async function obtenerDatos() {
  try {
    const respuesta = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log("Datos obtenidos:", respuesta.data);
  } catch (error) {
    console.error("Error al obtener los datos:", error.message);
  }
}

obtenerDatos();



app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

