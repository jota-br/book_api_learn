const express = require('express');
const {
    httpGetAllBooks,
    httpGetBookByAuthor,
    httpGetBookById,
    httpPostBook,
    httpPostUpdateBook,
    httpDeleteBook,
} = require('./books.controller');

const booksRouter = express.Router();

booksRouter.get('/', httpGetAllBooks);
booksRouter.get('/author/:author', httpGetBookByAuthor);
booksRouter.get('/:id', httpGetBookById);
booksRouter.post('/', httpPostBook);
booksRouter.post('/update/:id', httpPostUpdateBook);
booksRouter.post('/delete/:id', httpDeleteBook);

module.exports = booksRouter;