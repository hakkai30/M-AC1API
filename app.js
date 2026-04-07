const express = require('express')
const products_routes = require('./routes/products.js')
const slugify = require('slugify') 

//Server instantiation
const app = express()

//Server configuration: template engine
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('views'));

//Midleware
app.use(express.json())

// Dejamos que el enrutador de productos gestione las rutas
app.use('/', products_routes)

//Server startup
app.listen(5000, () => {
    // TAREA 5: Mensaje de arranque con slugify
    const mensaje = 'server is listening on port 5000';
    const mensajeSlug = slugify(mensaje, { replacement: '*' });
    
    console.log(mensajeSlug); 
})