
const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
   
    authorUsername: {
        type: String,
        required: true,
    },
    authorEmail: {
        type: String,
        required: true,
        unique: true
    },
    authorPhone: {
        type: Number,
        required: true,
        unique: true
    }
});

const AUTHOR = mongoose.model("Author", authorSchema);
module.exports = {
    AUTHOR,
};