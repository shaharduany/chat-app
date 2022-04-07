const mongoose = require('mongoose');
const { DATE } = require('mysql/lib/protocol/constants/types');

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
        type: String,
        required: false,
        default: new Date().toLocaleString()
    },
    room: {
        type: mongoose.Types.ObjectId,
        required: false,
        unique: false,
    }
});

module.exports = mongoose.model('Message', messageSchema);