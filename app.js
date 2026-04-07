const express = require('express');
const path = require('path');
const products_routes = require('./routes/products.js');
const slugify = require('slugify');

const app = express();

// Configuración de Motor de Plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// ARCHIVOS ESTÁTICOS
// Esto hace que lo que hay en /views sea accesible. 
// Tu CSS se cargará desde: /styles/styles.css
app.use(express.static(path.join(__dirname, 'views')));

app.use(express.json());

// Rutas
app.use('/', products_routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    // Tarea 5: Slugify
    const mensaje = 'server is listening on port ' + PORT;
    const mensajeSlug = slugify(mensaje, { replacement: '*' });
    console.log(mensajeSlug);
});