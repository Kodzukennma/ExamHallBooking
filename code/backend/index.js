// Import Express
const express = require('express');

// Create an instance of an Express app
const app = express();

// Define a port number
const port = 3000;

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Make the server listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
