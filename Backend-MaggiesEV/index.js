const express = require('express');
const app = express();
const port = 3000; // Replace with the desired port number

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Backend MaggiesEV!');
});

app.get('/product-listings', (req, res) => {
  res.send('The product listings!');
});

app.get('/product', (req, res) => {
  res.send('The product!');
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

