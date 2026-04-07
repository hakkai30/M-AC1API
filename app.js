const express = require('express')
const products_routes = require('./routes/products.js')
const slugify = require('slugify') // <-- 1. AÑADIMOS ESTA LÍNEA

//Server instantiation
const app = express()

//Server configuration: template engine
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('views'));

//Midleware
app.use(express.json())

// --- NUEVA RUTA PARA ARREGLAR "Cannot GET /" ---
app.get('/', (req, res) => {
    res.render('index'); // Renderiza tu archivo index.pug
});
// -----------------------------------------------

app.use('/', products_routes)

//Server startup
app.listen(5000, () => {
    // <-- 2. MODIFICAMOS EL MENSAJE DE ARRANQUE
    const mensaje = 'server is listening on port 5000';
    const mensajeSlug = slugify(mensaje, { replacement: '*' });
    
    console.log(mensajeSlug); // Imprimirá: server*is*listening*on*port*5000
})