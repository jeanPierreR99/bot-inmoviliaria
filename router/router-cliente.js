const express = require('express');
const router = express.Router();

const rutas = require('../controllers/index.controller-cliente');

router.get('/', rutas.mainCatalogo);
router.get('/:id', rutas.secondCatalogo);
module.exports = router;