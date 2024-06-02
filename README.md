## Simple Book api created to learn about Node.js
### GET
  http://localhost:3000/books
  Returns JSON with all books in books Map()

  http://localhost:3000/books/:id
  Returns JSON with book from books Map() with the especified id

  http://localhost:3000/books/:author
  Returns JSON with all books from books Map() with the especified author
  This query is not case sensitive, but requires full name

### POST
  http://localhost:3000/books
  Body {
      "title": "New Book",
      "author": "Juan Silvestre",
      "publisher": "A Book Publisher",
      "published": "July 18, 1975"
  }
  Returns JSON with book set in books Map()

### DELETE
  http://localhost:3000/books/delete/:id
  if if successful
  returns body {
      "deletionCompleted": "true"
  }