const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');

const portServer = process.env.PORT;

// Crear el servidor de Express
const app = express();

// Configuración CORS
app.use( cors() );

// Lectura y parse del body
app.use( express.json() );

// Base de datos
dbConnection();

// Rutas
app.use( '/api/usuarios', require('./routes/usuarios') );
app.use( '/api/login', require('./routes/auth') );




app.listen( portServer, () => {
	console.log('Servidor corriendo en puerto ' + portServer);
});


