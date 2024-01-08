const {app} = require('./app.js');
const {conexionDB} = require('./db.js');

// PRUEBA DE CONEXION A DB CON MONGODB
// const {run} = require('./db.js')
// run()

conexionDB();
app.listen(3000);
// console.log('SERVER ON PORT ', 3000);



// console.log("probando probando");

// console.log("segunda prueba");