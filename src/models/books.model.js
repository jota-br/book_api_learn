const { json } = require('express');
const Book = require('./books.mongo');

async function findBookById(bookId) {
    return await Book.findById(bookId);
}

async function getAllBooks() {
    try {
        return await Book.find().sort('-_id').exec();
    } catch (err) {
        console.error(err);
        return err;
    }
}

async function getBookById(bookId) {
    try {
        return await findBookById(bookId);
    } catch (err) {
        console.error(err);
        return err;
    }
}

async function getBookByAuthor(name) {
    try {
        return await Book.find({ author: { $regex: '.*' + name + '.*', $options: 'i' } });
    } catch (err) {
        console.error(err);
        return err;
    }
}

async function saveBook(data) {
    try {
        return await Book.create({
            title: data.title,
            author: data.author,
            publisher: data.publisher,
            publishDate: data.publishDate,
        });
    } catch (err) {
        console.error(err);
        return err;
    }
}

async function updateBookById(data) {
    try {
        const bookId = data.params.id;
        const updatedBook = data.body;
        const book = await findBookById(bookId);

        book.title = updatedBook.title;
        book.author = updatedBook.author;
        book.publisher = updatedBook.publisher;
        book.publishDate = updatedBook.publishDate;

        await book.save();
        return book;
    } catch (err) {
        console.error(err);
        return err;
    }
}

async function deleteBookById(bookId) {
    try {
        const book = await findBookById(bookId);
        if (book) {
            return await Book.deleteOne({ _id: bookId });
        }
        return {error: 'Book not found, deletion aborted'}
    } catch (err) {
        console.error(err);
        return err;
    }
}

module.exports = {
    getAllBooks,
    getBookById,
    getBookByAuthor,
    saveBook,
    updateBookById,
    deleteBookById,
}