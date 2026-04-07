const express = require('express')
const products_routes = require('./routes/products.js')
const slugify = require('slugify')

const app = express()

// Configuración de plantillas
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('views'));

app.use(express.json())

// Usamos las rutas de productos
app.use('/', products_routes)

app.listen(5000, () => {
    const mensaje = 'server is listening on port 5000';
    const mensajeSlug = slugify(mensaje, { replacement: '*' });
    console.log(mensajeSlug); 
})