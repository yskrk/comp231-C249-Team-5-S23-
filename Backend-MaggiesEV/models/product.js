// models/car.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  model: String,
  brand: String,
  category: String,
  description: String,
  quantity: Number,
  price: Number,
  imageLinks: Array
});

const Product = mongoose.model('Product', productSchema, 'sample_products');

module.exports = Product;
