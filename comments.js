// Create web server
const express = require('express');
const app = express();
const PORT = 3000;

// Create comments object
const comments = {
  1: 'First comment!',
  2: 'Second comment!',
  3: 'Third comment!',
  4: 'Fourth comment!',
  5: 'Fifth comment!',
};

// Create a route that sends the comments object
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

// Path: index.js
// Create web server
const express = require('express');
const app = express();
const PORT = 3000;

// Create a route that sends 'Hello, World!'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

// Path: index.js
// Create web server
const express = require('express');
const app = express();
const PORT = 3000;

// Create a route that sends 'Hello, World!'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Create a route that sends 'Welcome to the comments page!'
app.get('/comments', (req, res) => {
  res.send('Welcome to the comments page!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

// Path: index.js
// Create web server
const express = require('express');
const app = express();
const PORT = 3000;

// Create a route that sends 'Hello, World!'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Create a route that sends 'Welcome to the comments page!'
app.get('/comments', (req, res) => {
  res.send('Welcome to the comments page!');
});

// Create a route that sends 'Welcome to the about page!'
app.get('/about', (req, res) => {
  res.send('Welcome to the about page!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

// Path: index.js
// Create