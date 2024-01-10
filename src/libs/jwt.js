const jwt = require('jsonwebtoken');
const {TOKEN_SECRET} = require('../config.js');


function createAccessToken(payload) {
    return new Promise((res, rej) => {
        jwt.sign(
            payload,
            // ya no es necesario que lo cree aqui con ese payload
            // {
            //     id:usersaved._id,
            // }, 
            TOKEN_SECRET, 
            {
                // Opciones como la expiración 
                expiresIn: "1d",
            }, 
            (err, token) => {
                if (err) rej(err);
                res(token)
                // res.cookie('token', token)
                // res.json({
                //     message: "User created successfully",
                // })
            }
        )
    })
}

module.exports = {
    createAccessToken,
}