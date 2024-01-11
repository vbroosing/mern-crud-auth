// Se ejecutan antes de que lleguen a una ruta
const authrequire = (req, res, next) => {
    console.log('validaing token');
    next();
}

module.exports = {
    authrequire,
}