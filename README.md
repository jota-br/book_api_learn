## Simple Book api created to learn about Node.js
### GET
/books <br />
Returns JSON with all books in books Map() <br />

/books/:id <br />
Returns JSON with book from books Map() with the especified id <br />

/books/:author <br />
Returns JSON with all books from books Map() with the especified author <br />
This query is not case sensitive, but requires full name <br />
<br />
<br />
### POST
/books <br />
```
Body {
    "title": "New Book",
    "author": "Juan Silvestre",
    "publisher": "A Book Publisher",
    "published": "July 18, 1975"
}
```
Returns JSON with book set in books Map() <br />
<br />
<br />
### DELETE
/books/delete/:id <br />
if if successful <br />
```
returns body {
    "deletionCompleted": "true"
}
```
