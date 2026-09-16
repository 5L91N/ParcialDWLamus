require('dotenv').config();
console.log('URI cruda:', JSON.stringify(process.env.MONGO_URI));
const mongoose = require('mongoose');

const asistenciaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  idUniversidad: {
    type: String,
    required: true
  },


  });

const Asistencia = mongoose.model('Asistencia', asistenciaSchema, 'asistencias');

async function crearPerfil() {
  try {

    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conectado a MongoDB Atlas (examen)');


    const miPerfil = new Asistencia({
      nombre: 'Elena Lamus', 
      idUniversidad: '000531391',
    });


    const resultado = await miPerfil.save();
    
    console.log(' Documento creado exitosamente en la colección "asistencias":');
    console.log(resultado);

  } catch (error) {
    console.error('Error al crear el documento:', error);
  } finally {
    await mongoose.disconnect();
    console.log(' Desconectado de MongoDB');
  }
}


crearPerfil();