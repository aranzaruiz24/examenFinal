const express = require("express"); // Importar express
const router = express.Router();
const ctrlDatos = require('../controlador');


router.get('/nasa', ctrlDatos.findDatos);

router.get('/inegi/:estado', ctrlDatos.findDatosEstado);

module.exports = router;