const express = require('express');
const router = express.Router();


const rutas = require('../controllers/index.controller-webhook');

router.get('/webhook', rutas.getWebHook);
router.post('/webhook', rutas.postWebHook); 


module.exports = router;