const mongoose = require("mongoose");

const bibliotecaEsquema = new mongoose.Schema({
  title: String,
  author: String,
  editorial: String,
  pages: Number,
  // sinopsis: String,
  rating: Number,
  // dateAdd: String,
  // dateUpdate: String,
  // coverImage: { url: String, public_id: String },
});

module.exports = mongoose.model("Libro", bibliotecaEsquema);
