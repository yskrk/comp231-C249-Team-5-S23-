// models/brand.js
const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    name: String,
    description: String,
    isActive: Boolean,
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
