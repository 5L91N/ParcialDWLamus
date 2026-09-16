const mongoose = require('mongoose');

const ingredienteSchema = new mongoose.Schema({
  nombre: String,
  cantidad: Number,
  unidad: String
}, { _id: false });

const origenSchema = new mongoose.Schema({
  ciudad: String,
  pais: String
}, { _id: false });

const recetaSchema = new mongoose.Schema({
  nombre: String,
  tipoCocina: String,
  tiempoPreparacion: String,
  ingredientes: [ingredienteSchema],
  origen: origenSchema
});

module.exports = mongoose.model('Receta', recetaSchema, 'recetas_examen');
