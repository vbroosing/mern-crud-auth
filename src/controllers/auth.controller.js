const {User} = require('../models/user.model.js');

const register = async (req, res) => {
    try {
        const {email, password, username} = req.body;

    const newUser = new User({
        username,
        password,
        email});
    console.log(newUser);

    const usersaved = await newUser.save();

    // res.send(newUser.toString());
    res.json(usersaved);

    } catch (err) {
        console.log(`error de tipo ${err}`);
    }
};

const login = (req, res) => {
    const {email, password} = req.body;
    res.send('Login');
};



module.exports = {
    register,
    login
}