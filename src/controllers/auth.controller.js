const {User} = require('../models/user.model.js');
const bcrypt = require('bcryptjs');
const {createAccessToken} = require('../libs/jwt.js');

const register = async (req, res) => {

    const {email, password, username} = req.body;

    try {    
        const hash = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            password: hash,
            email});
        console.log(newUser);

        const usersaved = await newUser.save();
        const token = await createAccessToken({id:usersaved._id,});

        res.cookie('token', token)
        // // Podemos enviar un mensaje
        // res.json({
        //     message: "User created successfully",
        // })

        // o datos para el frontend
        res.json({
            id: usersaved._id,
            username: usersaved.username,
            email: usersaved.email,
            createdAt: usersaved.createdAt,
            updatedAt: usersaved.updatedAt,
        })

    } catch (err) {
        console.log(`error de tipo ${err}`);
        res.status(500).json({ message: err.message});
    }
};

const login = (req, res) => res.send('Login');

module.exports = {
    register,
    login
}