/*
*	Ruta: /api/usuarios
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const { getUsuarios, crearUsuarios, actualizarUsuario, borrarUsuario } = require('../controllers/usuarios');

const router = Router();


router.get( '/', validarJWT, getUsuarios);

router.post( '/', [
	check(['nombre', 'password'], 'Nombre y password es obligatorio').notEmpty(),
	check('email', 'El email es obligatorio').isEmail(),
	validarCampos
], crearUsuarios);

router.put( '/:id', [
	validarJWT,
	check(['nombre', 'password'], 'Nombre y password es obligatorio').notEmpty(),
	check('email', 'El email es obligatorio').isEmail(),
	check('role', 'El role es obligatorio').notEmpty(),
	validarCampos
], actualizarUsuario);

router.delete( '/:id',
	validarJWT,
	borrarUsuario);




module.exports = router;

