const books = new Map(); // Create map for saving books

const defaultBook = {
    title: 'This the Book!',
    author: 'Bok Riter',
    publisher: 'The Book Consortium',
    published: new Date('January 1, 1970'),
    id: 0,
}

books.set(defaultBook.id, defaultBook);

function existsBookWithId(bookId) {
    return books.has(bookId);
}

function existsAuthor(author) {
    for (const book of books.values()) {
        if (book.author.toUpperCase() === author.toUpperCase()) {
            return true;
        }
    }
    return false;
}

function getAllBooks() {
    return Array.from(books.values());
}

function getBookByAuthor(author) {
    let authorBooks = new Map()
    for (const book of books.values()) {
        if (book.author.toUpperCase() === author.toUpperCase()) {
            authorBooks.set(book.id, book);
        }
    }
    return Array.from(authorBooks.values());
}

function getBookById(bookId) {
    let arr = Array.from(books.values());
    let book = arr.find(book => book.id === bookId);
    return book;
}

function postBook(book) {
    let newId = books.size;
    books.set(newId, Object.assign(book, {
        id: newId,
    }));
}

function deleteBook(bookId) {
    return books.delete(bookId);
}

module.exports = {
    existsBookWithId,
    existsAuthor,
    getAllBooks,
    getBookByAuthor,
    getBookById,
    postBook,
    deleteBook,
}