const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        // configuracion de strip
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// export default mongoose.model('User', userSchema);


const usuarios = mongoose.model('User', userSchema);

module.exports = {
    usuarios,
}