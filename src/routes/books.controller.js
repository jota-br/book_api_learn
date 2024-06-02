const {
    existsBookWithId,
    existsAuthor,
    getAllBooks,
    getBookByAuthor,
    getBookById,
    postBook,
    deleteBook,
} = require('../models/books.model');

async function httpGetAllBooks(req, res) {
    return await res.status(200).json(getAllBooks());
}

// Title, Author, Id
async function httpGetBookByAuthor(req, res) {
    const author = req.params.author;
    if (!existsAuthor(author)) {
        return res.status(404).json({
            error: 'Author not found',
        });
    }
    return await res.status(200).json(getBookByAuthor(author));
}

async function httpGetBookById(req, res) {
    const bookId = Number(req.params.id);
    if (!existsBookWithId(bookId)) {
        return res.status(404).json({
            error: 'Book ID not found',
        });
    }
    return await res.status(200).json(getBookById(bookId));
}

async function httpPostBook(req, res) {
    const book = req.body;

    if (!book.title || !book.author || !book.publisher || !book.published ) {
        return res.status(400).json({
            error: 'Missing required book information',
        });
    }
    book.published = new Date(book.published);
    if (isNaN(book.published)) {
        return res.status(400).json({
            error: 'Invalid published date',
        });
    }

    postBook(book);
    return res.status(201).json(book);
}

async function httpDeleteBook(req, res) {
    const bookId = Number(req.params.id);
    if (!existsBookWithId(bookId)) {
        return res.status(404).json({
            error: 'Book ID not found, deletion aborted',
        });
    }

    const result = deleteBook(bookId);
    return res.status(200).json({
        deletionCompleted: `${result}`,
    });
}

module.exports = {
    httpGetAllBooks,
    httpGetBookByAuthor,
    httpGetBookById,
    httpPostBook,
    httpDeleteBook,
}