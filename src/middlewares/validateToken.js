const { json } = require('express');
const jwt = require('jsonwebtoken');
const { TOKEN_SECRET } = require('../config.js')
const { jCookie } = require('../utilities/jCookie.js');

// Se ejecutan antes de que lleguen a una ruta
const authRequire = (req, res, next) => {

    const cookies = req.headers.cookie;
    const jsonCookie = jCookie(cookies)

    if (!jsonCookie) return res.status(401).json({ message: "Sin autorización por falta de Token", });

    // verify devuelve el contenido del token, ya sea llamado "usuario" o "user"
    jwt.verify(
        jsonCookie.cookie,
        TOKEN_SECRET,
        (err, user) => {

        if (err) return res.status(401).json({ message: "Token Inválido", });
        
        req.user = user

        next();
        }
    );

    
};
    
    

module.exports = {
    authRequire,
}
