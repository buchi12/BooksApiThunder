const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Sample book data (you can use a database in a real application)
const books = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
];

// Route to get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Route to add a new book (POST)
app.post('/books', (req, res) => {
  const { title, author } = req.body;

  // Generate a new book ID (in a real application, this would come from a database)
  const newId = books.length + 1;

  // Create a new book object
  const newBook = { id: newId, title, author };

  // Add the new book to the collection
  books.push(newBook);

  res.status(201).json(newBook);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
