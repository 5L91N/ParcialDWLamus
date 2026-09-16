require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const Receta = require('./models/Receta');


const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/receta', async (req, res) => {
  try {
    const receta = await Receta.findOne();
    
    if (!receta) {
      return res.status(404).send('No hay recetas en la colección');
    }
    
    res.render('receta', { receta });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al consultar la receta');
  }
});


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor en http://localhost:${PORT}/receta`);
  });
});