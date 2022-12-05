require("dotenv").config();
const express = require("express");
const cors = require("cors");
const conexion = require("./src/database");
const app = express();
const LibreriaAPI = require("./src/routes");
conexion();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

LibreriaAPI(app);

// app.get("/:id", (request, response) => {
//   const id = request.params.id;
//   response.send(`hola ${id}`);
// });

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT} en funcionamiento!`);
});
