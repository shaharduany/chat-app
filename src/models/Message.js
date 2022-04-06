const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    sender: {
        type: String,
        required: true,
        unique: false,
    },
    content: {
        type: String,
        required: true,
        unique: false,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    room: {
        type: mongoose.Types.ObjectId,
        required: false,
        unique: false,
    }
});

module.exports = mongoose.model('Message', messageSchema);