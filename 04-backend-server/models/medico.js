const { Schema, model, SchemaTypes } = require('mongoose');


const MedicoSchema = Schema({

	nombre: {
		type: String,
		required: true,
	},
	img: {
		type: String,
	},
	usuario: {
		type: SchemaTypes.ObjectId,
		ref: 'Usuario',
		required: true
	},
	hospital: {
		type: SchemaTypes.ObjectId,
		ref: 'Hospital',
		required: true
	},

}, { collection: 'medicos' });


MedicoSchema.method('toJSON', function() {
	const { __v, ...object } = this.toObject();

	return object;
});


module.exports = model( 'Medico', MedicoSchema );

