const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        // configuracion de strip
        trim: true
    },
    date: {
        type: String,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

}, {
    // Para cortes de tiempo en la colecciósn
    timestamps: true,
});

// export default mongoose.model('User', userSchema);

let Task = mongoose.model('Task', taskSchema);

module.exports = {
    Task,
}