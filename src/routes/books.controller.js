const {
    getAllBooks,
    getBookById,
    getBookByAuthor,
    saveBook,
    updateBookById,
    deleteBookById,
} = require('../models/books.model');

// handle return error: 'msg';

async function httpGetAllBooks(req, res) {
    try {
        const books = await getAllBooks();
        if (books[0]) {
            return res.status(200).json(books);
        }
        return res.status(404).json({ response: 'No books found' });
    } catch (err) {
        console.error(err);
        return err;
    }
}

async function httpGetBookById(req, res) {
    try {
        const bookId = req.params.id;
        const book = await getBookById(bookId);
        if (book?.__v >= 0) {
            return res.status(200).json(book);
        }
        return res.status(404).json({ response: `No book found with id ${bookId}`, query: bookId });
    } catch (err) {
        console.error(err);
        return err;
    }
}

async function httpGetBookByAuthor(req, res) {
    try {
        const author = req.params.author;
        const book = await getBookByAuthor(author);
        if (book[0]) {
            return res.status(200).json(book);
        }
        return res.status(404).json({ response: `Author not found with name ${author}`, query: author, });
    } catch (err) {
        console.error(err);
        return err;
    }
}

async function httpSaveBook(req, res) {
    try {
        const data = req.body;
        const book = await saveBook(data);
        if (book.__v >= 0) {
            return res.status(200).json(book);
        }
        return res.status(404).json({ response: `No book found with id ${req.params.id}`, query: req.params.id, });
    } catch (err) {
        console.error(err);
        return err;
    }
}

async function httpUpdateBookById(req, res) {
    try {
        const data = req;
        const book = await updateBookById(data);
        if (book.__v >= 0) {
            return res.status(200).json(book);
        }
        return res.status(404).json({ response: `No book found with id ${req.params.id}`, query: req.params.id });
    } catch (err) {
        console.error(err);
        return err;
    }
}

async function httpDeleteBookById(req, res) {
    try {
        const bookId = req.params.id;
        const book = await deleteBookById(bookId);
        if (book?.deletedCount > 0) {
            return res.status(200).json(book);
        }
        return res.status(404).json({ response: `No book found with id ${req.params.id}, deletion aborted`, query: req.params.id });
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