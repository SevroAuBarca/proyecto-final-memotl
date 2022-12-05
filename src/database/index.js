const mongoose = require("mongoose");
const URL = process.env.MONGO_URL;
const conexion = () => {
  mongoose.connect(URL);
  mongoose.connection.on("error", (err) => {
    console.log("Error de conexion!!: " + err);
  });
  mongoose.connection.on("open", () => {
    console.log("Conexion establecida!!");
  });
};

module.exports = conexion;
