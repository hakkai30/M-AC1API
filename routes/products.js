const express = require('express');
const router = express.Router();
const auth = require('../auth/auth');
const renderHome = require('../controllers/site/home');
const getProducts = require('../controllers/api/getProducts');

// RUTA PARA LA CAPTURA: Sin authenticateKey para que el navegador la abra bien
router.get('/api', renderHome);

// RUTAS PROTEGIDAS: Estas siguen necesitando API Key (como pide la práctica)
router.get('/api/products', auth.authenticateKey, getProducts);

module.exports = router;