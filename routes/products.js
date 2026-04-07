const express = require('express')
const router = express.Router()
const auth = require('../auth/auth')
const renderHome = require('../controllers/site/home')
const getProducts = require('../controllers/api/getProducts')
// ... (resto de imports igual)

// Esta es la ruta que usaremos para la captura (sin candado)
router.get('/api', renderHome) 

// Las de productos las dejamos con auth como pide la práctica
router.get('/api/products', auth.authenticateKey, getProducts)

module.exports = router