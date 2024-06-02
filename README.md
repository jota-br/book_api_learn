## Book api created to learn Node.js
### GET book(s)
/books <br />
Returns JSON with all books in books Map() <br />

/books/:id <br />
Returns JSON with book from books Map() with the especified id <br />

/books/:author <br />
Returns JSON with all books from books Map() with the especified author <br />
This query is not case sensitive, but requires full name <br />
<br />
<br />
### POST insert new book
/books <br />
```
required body {
    "title": "bookName",
    "author": "authorName",
    "publisher": "publisherName",
    "published": "Month Day, Year"
}
```
```
returns body {
    "title": "New Book",
    "author": "Juan Silvestre",
    "publisher": "A Book Publisher",
    "published": "July 18, 1975"
}
```
Returns JSON with book set in books Map() <br />
<br />
<br />
### POST DELETE book
/books/delete/:id <br />
if successful <br />
```
returns body {
    "deletionCompleted": "true"
}
```
