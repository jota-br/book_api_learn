## Book api created to learn Node.js

### Setup
#### src/.env
Set PORT
```env
PORT=3000
```

#### src/services/mongo.js
Set MongoDB connection URL
```js
const MONGO_URL = '';
```

### src/models/mongo.js
Books Schema:
```js
title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    publishDate: {
        type: String,
        required: true,
    }
```

<br />
<br />

### GET book(s)
/books <br />
Returns JSON with all books data <br />

/books/:id <br />
Return JSON with book data <br />

/books/author/:author <br />
Returns JSON with author books <br />
This query is not case sensitive <br />
<br />
<br />

### POST new book
/books <br />
required body:
```js
{
    "title": "bookName",
    "author": "authorName",
    "publisher": "publisherName",
    "publishDate": "Month Day, Year"
}
```
Returns JSON with new book data <br />
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
Returns JSON with updated fields <br />
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
