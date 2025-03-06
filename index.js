const axios = require("axios");

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
