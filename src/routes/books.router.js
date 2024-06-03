const express = require('express');
const {
    httpGetAllBooks,
    httpGetBookById,
    httpGetBookByAuthor,
    httpSaveBook,
    httpUpdateBookById,
    httpDeleteBookById,
} = require('./books.controller');

const booksRouter = express.Router();

booksRouter.get('/', httpGetAllBooks);
booksRouter.get('/:id', httpGetBookById);
booksRouter.get('/author/:author', httpGetBookByAuthor);
booksRouter.post('/', httpSaveBook);
booksRouter.post('/update/:id', httpUpdateBookById);
booksRouter.post('/delete/:id', httpDeleteBookById);

module.exports = booksRouter;