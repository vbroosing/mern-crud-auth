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
}, {
    // Para cortes de tiempo en la colecciósn
    timestamps: true,
});

// export default mongoose.model('User', userSchema);

let User = mongoose.model('User', userSchema);

module.exports = {
    User,
}