const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');

const portServer = process.env.PORT;

// Crear el servidor de Express
const app = express();
app.use( cors() );

// Base de datos
dbConnection();

// mean_user
// qdR2PtE3feknLH2z

// Rutas
app.get( '/', (req, res) => {

	res.status(400).json({
		ok: true,
		msg: 'Hola mundo',
	});

});


app.listen( portServer, () => {
	console.log('Servidor corriendo en puerto ' + portServer);
});


