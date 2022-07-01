const { response } = require('express');
const Medico = require('../models/medico');

const getMedicos = async (req, res = response) => {
	const medicos = await Medico.find()
		.populate('usuario', 'nombre img')
		.populate('hospital', 'nombre img');

	res.json({
		ok: true,
		medicos
	});
};

const crearMedico = async (req, res = response) => {
	const uid = req.uid;
	const medico = new Medico({ usuario: uid, ...req.body });

	try {
		const medicoDB = await medico.save();

		res.json({
			ok: true,
			medico: medicoDB
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador'
		});
	}
};

const actualizarMedico = async (req, res = response) => {
	const id = req.params.id;
	const uid = req.uid;

	try {
		const medicoDB = await Medico.findById(id);

		if (!medicoDB) {
			res.status(404).json({
				ok: false,
				msg: 'Médico no encontrado por id'
			});
		}

		const cambiosMedico = {
			usuario: uid,
			...req.body
		};

		const medicoActualizado = await Medico.findByIdAndUpdate(
			id,
			cambiosMedico,
			{ new: true }
		);

		res.json({
			ok: true,
			medico: medicoActualizado
		});
	} catch (error) {
		console.warn(error);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador'
		});
	}
};

const borrarMedico = async (req, res = response) => {
	const id = req.params.id;

	try {
		const medicoDB = await Medico.findById(id);

		if (!medicoDB) {
			res.status(404).json({
				ok: false,
				msg: 'Médico no encontrado por id'
			});
		}

		await Medico.findByIdAndRemove(id);

		res.json({
			ok: true,
			msg: 'Médico borrado'
		});
	} catch (error) {
		console.warn(error);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador'
		});
	}
};

module.exports = {
	getMedicos,
	crearMedico,
	actualizarMedico,
	borrarMedico
};
