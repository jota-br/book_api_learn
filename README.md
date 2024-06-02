## Book api created to learn Node.js

### Books Map() format
```js
const defaultBook = {
    title: 'This the Book!',
    author: 'Bok Riter',
    publisher: 'The Book Consortium',
    published: new Date('January 1, 1970'),
    id: 0,
}
```
<br />
<br />

### GET book(s)
/books <br />
Returns JSON with all books in books Map() <br />

/books/:id <br />
Returns JSON with book from books Map() with the especified id <br />

/books/author/:author <br />
Returns JSON with all books from books Map() with the especified author <br />
This query is not case sensitive, but requires full name <br />
<br />
<br />

### POST insert new book
/books <br />
required body:
```js
{
    "title": "bookName",
    "author": "authorName",
    "publisher": "publisherName",
    "published": "Month Day, Year"
}
```
Returns JSON with book set in books Map(): <br />
```js
{
    "title": "New Book",
    "author": "Juan Silvestre",
    "publisher": "A Book Publisher",
    "published": "July 18, 1975"
}
```
<br />
<br />

### POST update book
/books <br />
required body:
```js
{
    "title": "bookName",
    "author": "authorName",
    "publisher": "publisherName",
    "published": "Month Day, Year"
}
```
Returns JSON with updated fields: <br />
```js
{
    "title": true,
    "author": true,
    "publisher": true,
    "published": true
}
```
<br />
<br />

### POST DELETE book
/books/delete/:id <br />
if successful returns: <br />
```js
{
    "deletionCompleted": "true"
}
```
