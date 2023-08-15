// app.js
const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const Product = require('./models/product');
const Brand = require('./models/brand');
const Category = require('./models/category');
const bodyParser = require('body-parser');



const app = express();
const port = 3004; // Choose any available port you prefer



/* OUR CONFIGURATIONS */
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());




// Connect to mongoose.
mongoose.connect('mongodb://127.0.0.1:27017/test_maggiesevs', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});






// OUR ROUTES
app.put('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, brand, category, price, quantity, imageLinks } = req.body;

        // Find the product by ID and update its properties
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { name, brand, category, price, quantity, imageLinks },
            { new: true } // Return the updated product
        );

        res.json({ updatedProduct: updatedProduct });

    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'An error occurred while updating the product.' });
    }
});




app.post('/add-product', async (req, res) => {
    try {

        const { name, brand, category, price, quantity, imageLinks } = req.body;

        // Create a new Product instance
        const newProduct = new Product({ name, brand, category, price, quantity, imageLinks });

        // Save the product to the database
        const savedProduct = await newProduct.save();

        res.status(201).json({
            responseMsg: "This is a backend response from route: /add-product",
            savedProduct: savedProduct
        });

    } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({ error: 'Error fetching products ' + error.message });
    }
});



app.get('/searchProducts', async (req, res) => {
    try {
        const brandsArr = req.query.brands?.split(",");
        const categoriesArr = req.query.categories?.split(",");


        const defaultMinPrice = 0;
        const defautMaxPrice = 1000000
        const minPrice = parseFloat(req.query.minPrice ?? defaultMinPrice);
        const maxPrice = parseFloat(req.query.maxPrice ?? defautMaxPrice);
        const nameSearchPhrase = req.query.name ?? "";

        const products = await Product.find({
            brand: { $in: brandsArr },
            category: { $in: categoriesArr },
            name: { $regex: nameSearchPhrase, $options: 'i' },
            price: { $gte: minPrice, $lte: maxPrice },
        });

        res.json({
            products: products
        });
    } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({ error: 'Error fetching products ' + error.message });
    }
});



app.get('/products/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await Product.findOne({ _id: productId });

        res.json({
            productId: productId,
            product: product
        });
    } catch (error) {
        console.error('Error fetching car data:', error);
        res.status(500).json({ error: 'Error fetching products data' });
    }
});



app.get('/listings', async (req, res) => {
    try {
        const products = await Product.find();
        const brands = await Brand.find();
        const categories = await Category.find();

        // Query products price range.
        var priceRange = { minPrice: null, maxPrice: null };

        const result = await Product.aggregate([
            {
                $group: {
                    _id: null,
                    minPrice: { $min: '$price' },
                    maxPrice: { $max: '$price' },
                },
            },
            {
                $project: {
                    _id: 0,
                },
            },
        ]);

        if (result && result.length > 0) {
            priceRange = result[0];
        }


        res.json({
            products: products,
            brands: brands,
            categories: categories,
            priceRange: priceRange
        });
    } catch (error) {
        console.error('Error fetching car data:', error);
        res.status(500).json({ error: 'Error fetching products data' });
    }
});



app.get('/', (req, res) => {
    res.send('Hello, Maggie\'s EVs Backend!');
});




module.exports = app;