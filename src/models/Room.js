const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema({
    guests: {
        type: Array,
        required: true,
        unique: false,
    },
    messages: {
        type: Array,
        required: false,
        unique: false,
    },
    name: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Room', roomSchema);