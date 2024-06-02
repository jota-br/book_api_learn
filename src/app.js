const express = require('express');
var morgan = require('morgan');

const booksRouter = require('./routes/books.router');

const app = express();

app.use(morgan('combined'));
app.use(express.json());

app.use('/books', booksRouter);

module.exports = app;