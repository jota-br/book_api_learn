const {
    getAllBooks,
    getBookById,
    getBookByAuthor,
    saveBook,
    updateBookById,
    deleteBookById,
} = require('../models/books.model');

async function httpGetAllBooks(req, res) {
    try {
        const books = await getAllBooks();
        return res.status(200).json(books);
    } catch (err) {
        console.error(err);
        return err;
    }
}

async function httpGetBookById(req, res) {
    try {
        const bookId = req.params.id;
        const book = await getBookById(bookId);
        return res.status(200).json(book);
    } catch (err) {
        console.error(err);
        return err;
    }
}

async function httpGetBookByAuthor(req, res) {
    try {
        const author = req.params.author;
        const book = await getBookByAuthor(author);
        return res.status(200).json(book);
    } catch (err) {
        console.error(err);
        return err;
    }
}

async function httpSaveBook(req, res) {
    try {
        const data = req.body;
        const book = await saveBook(data);
        return res.status(200).json(book);
    } catch (err) {
        console.error(err);
        return err;
    }
}

async function httpUpdateBookById(req, res) {
    try {
        const data = req;
        const book = await updateBookById(data);
        return res.status(200).json(book);
    } catch (err) {
        console.error(err);
        return err;
    }
}

async function httpDeleteBookById(req, res) {
    try {
        const bookId = req.params.id;
        const book = await deleteBookById(bookId);
        return res.status(200).json(book);
    } catch (err) {
        console.error(err);
        return err;
    }
}

module.exports = {
    httpGetAllBooks,
    httpGetBookById,
    httpGetBookByAuthor,
    httpSaveBook,
    httpUpdateBookById,
    httpDeleteBookById,
}