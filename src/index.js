const {app} = require('./app.js');
const {run} = require('./db.js')

app.listen(3000);
console.log('SERVER ON PORT ', 3000);

run()

console.log("probando probando");

console.log("segunda prueba");