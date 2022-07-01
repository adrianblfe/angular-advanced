/*
*	Ruta: /api/medicos
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const { 
	getMedicos,
	crearMedico,
	actualizarMedico,
	borrarMedico,
} = require('../controllers/medicos');


const router = Router();


router.get( '/', getMedicos);

router.post( '/', 
	[
		validarJWT,
		check('nombre', 'El campo nombre es obligatorio').notEmpty(),
		check('hospital', 'El hospital id no es un identificador de Mongo').isMongoId(),
		validarCampos,
	],
	crearMedico
);

router.put( '/:id', [], actualizarMedico);

router.delete( '/:id', borrarMedico);




module.exports = router;

