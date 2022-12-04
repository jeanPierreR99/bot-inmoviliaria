const express = require('express');
const router = express.Router();

const rutas = require('../controllers/index.controller-admi');

//rutas-funciones
router.get('/', rutas.plantilla);



module.exports = router;