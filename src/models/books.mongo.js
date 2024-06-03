const { mongoose } = require('mongoose');
const { Schema, model } = mongoose;

const booksSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    publishDate: {
        type: String,
        required: true,
    },
});

module.exports = model('book', booksSchema);