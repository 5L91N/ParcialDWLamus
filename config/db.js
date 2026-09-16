const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conectado a MongoDB Atlas (examen)');
  } catch (error) {
    console.error('Error de conexión:', error.message);
    process.exit(1);
  }
}

module.exports = connectDB;