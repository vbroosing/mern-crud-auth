const express = require('express');
const morgan = require('morgan');
const authRoutes = require('./routes/auth.routes.js');
const tasksRoutes = require('./routes/tasks.routes.js');
const cors = require('cors');


const app = express();

// configurando el cors
app.use(cors({
    origin: 'http://localhost:5173'
}));
// Para ver solicitudes en consola
app.use(morgan('dev'));
// Para formatear en JSON
app.use(express.json());


app.use('/api', authRoutes.router);
app.use('/api', tasksRoutes.router);


module.exports = {
    app,
}       

