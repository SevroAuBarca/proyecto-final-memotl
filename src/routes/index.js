const router = require("express").Router();
//importas esta variable de los modelos
const Libro = require("../models/");

const LibreriaAPI = (app) => {
  router.get("/", async (request, response) => {
    //esta linea trae todos los datos de la base de datos de mongo atlas
    //el async await es una forma de promesas pero mas sencilla, ve un video sobre ello xd
    const libros = await Libro.find({});
    //retorna los datos en json
    response.json(libros);
  });
  router.get("/:id", async (request, response) => {
    //esta linea obtiene el id de la ruta que haas escrito, ejemplo: http://localhost:3005/api/v1/libros/638d700dc1ef967779088054 <- esto es el id
    const id = request.params.id;
    //Busca el libro por su id
    const libro = await Libro.findById(id);
    //retorna el libro en json
    response.json(libro);
  });
  router.post("/", async (request, response) => {
    //Obtienes los datos que envies desde la peticion post
    const data = request.body;
    //Crea el dato y lo guarda en la base de datos
    const res = await Libro.create(data);
    //retorna el dato en json
    response.status(200).json({ message: "sucess", data: res });
  });
  router.put("/:id", (request, response) => {
    response
      .status(200)
      .json({ message: "sucess", data: { value: "hola desde peticion put" } });
  });
  router.delete("/:id", (request, response) => {
    response.status(200).json({
      message: "sucess",
      data: { value: "hola desde peticion delete" },
    });
  });
  app.use("/api/v1/libros", router);
};

module.exports = LibreriaAPI;
