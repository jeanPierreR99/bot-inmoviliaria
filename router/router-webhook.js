const express = require('express');
const router = express.Router();


const rutas = require('../controllers/index.controller-webhook');

router.get('/', rutas.getWebHook);
router.post('/', rutas.postWebHook); 


module.exports = router;