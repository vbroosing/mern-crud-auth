const express = require('express');
const morgan = require('morgan');
const authRoutes = require('./routes/auth.routes.js');

const app = express();

// Para ver solicitudes en consola
app.use(morgan('dev'));
// Para formatear en JSON
app.use(express.json());


app.use('/api', authRoutes.router);

module.exports = {
    app,
}       

