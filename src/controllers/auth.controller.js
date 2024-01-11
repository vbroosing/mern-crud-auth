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
        // Podemos enviar un mensaje
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
        // console.log(`error de tipo ${err}`);
        res.status(500).json({ message: err.message});
    }
};

const login = async (req, res) => {

    const {email, password} = req.body;

    try {    
        const userFound = await User.findOne({ email });

        if (!userFound) return res.send(400).json({message: "User not found"});

        // Compare de bcrypt devuelve un true o false
        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) return res.send(400).json({message: "incorrect password"}); 

        const token = await createAccessToken({id:userFound._id,});

        res.cookie('token', token)

        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        })

    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};

const logout = async (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    })

    return res.sendStatus(200);

};

const profile = (req, res) => {
    res.send('profile')
}

module.exports = {
    register,
    login,
    logout,
    profile
}
