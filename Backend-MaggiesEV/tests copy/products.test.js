const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server'); // Adjust the path to your Express app file
const Product = require('../models/product');


let server;

describe("Maggie's EVs Integration Tests", () => {

    beforeAll(() => {
        // Perform any setup or asynchronous operations before the tests start.
        server = app.listen(3004, () => { }); // Adjust the port as needed        
    });



    afterEach(async () => {
        // Remove all documents from the Product collection
        await Product.deleteMany({});
    });



    afterAll(async () => {
        mongoose.connection.close();
        await server.close();

    });


    it('reads a product for a given product id', async () => {

        /**
         * Given there's a newly created product,
         */
        const newProduct = new Product({
            name: "New EV Car",
            price: 1099.99
        });

        // Save the product to the database
        const savedProduct = await newProduct.save();


        /**
         * ...if I access the get product route,
         */
        const response = await request(app).get(`/products/${savedProduct._id}`);



        /**
         * ...then product ids should be the same.
         */
        const retrievedProduct = response.body.product;

        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(retrievedProduct._id).toBe(savedProduct._id.toString());
        expect(retrievedProduct).toHaveProperty('name');
        expect(retrievedProduct).toHaveProperty('price');
    });



    it('creates a product given the product details', async () => {

        /**
         * Given there are pieces of information for a new product,
         */
        const newProductDetails = {
            name: "New EV Car",
            price: 1099.99
        };



        /**
         * ...if I make a request to create that product,
         */
        const response = await request(app)
            .post(`/add-product`)
            .send(newProductDetails);



        /**
         * ...then it should be saved in the database.
         */
        const newlyCreatedProduct = response.body.savedProduct;

        const theDbRetrievedProduct = await Product.findOne({ _id: newlyCreatedProduct._id });

        expect(response.status).toBe(201);
        expect(response.type).toBe('application/json');
        expect(newlyCreatedProduct._id).toBe(theDbRetrievedProduct._id.toString());
        expect(newlyCreatedProduct.name).toBe(theDbRetrievedProduct.name);
    });



    it('updates a product', async () => {

        /**
         * Given a product
         */
        const newProduct = new Product({
            name: "Beetle 1949",
            brand: "Volkswagen",
            price: 28000.00
        });

        const savedProduct = await newProduct.save();



        /**
         * ...if I make a request to update the product detail,
         */
        const updatedProductDetails = {
            name: "Beetle 1949",
            brand: "BMW",
            price: 17000.49
        };

        const response = await request(app)
            .put(`/products/${savedProduct._id}`)
            .send(updatedProductDetails);



        /**
         * ...then it should be saved in the database.
         */
        const theDbRetrievedProduct = await Product.findOne({ _id: savedProduct._id });
        expect(theDbRetrievedProduct.brand).toBe(updatedProductDetails.brand);
    });



    it('searches for products based on name and brand', async () => {

        /**
         * Given a list of products,
         */
        const products = [
            {
                name: 'Tesla Model 3',
                price: 32999.99,
                brand: "Tesla"
            },
            {
                name: 'Tesla Model S',
                price: 94000.49,
                brand: "Tesla"
            },
            {
                name: 'Toyota Camry Hybrid',
                price: 34449.49,
                brand: "Toyota"
            },
        ];

        Product.insertMany(products);        



        /**
         * ...if I make a request to search for products based on a prodcut-name-phrase
         */
        const searchNamePhrase = "Tes";
        const searchBrand = "Tesla";
        let searchProductUrl = "/searchProducts?name=" + searchNamePhrase;
        searchProductUrl += "&brands=" + searchBrand;

        const response = await request(app).get(searchProductUrl);

        const allProducts = await Product.find();
        const searchedProducts = response.body.products;



        /**
         * ...then it should return products with names containing the name phrase.
         */        
        expect(allProducts.length).toBe(3);
        expect(searchedProducts.length).toBe(2);
        expect(searchedProducts[0].name).toContain(searchNamePhrase);
        expect(searchedProducts[1].name).toContain(searchNamePhrase);
    });



    it('searches for products based on brands', async () => {

        /**
         * Given a list of products,
         */
        const products = [
            {
                "name": "Tesla Model 3",
                "brand": "Tesla",
                "model": "Model 3",
                "price": 38549.59,
                "category": "E-vehicle",
                "quantity": 7,
                "description": "",
                "imageLinks": [
                    "my-googled-tesla-model-3.jpg",
                    "my-googled-tesla-model-3-white.jpg",
                    "my-googled-tesla-model-3-blue.jpg"
                ]
            },
            {
                "name": "Honda Accord Hybrid",
                "brand": "Honda",
                "model": "Accord 2023",
                "price": 31049.00,
                "category": "E-vehicle",
                "quantity": 7,
                "description": "",
                "imageLinks": [
                    "honda-accord-hybrid-2023-1.jpg",
                    "honda-accord-hybrid-2023-2.jpg",
                    "honda-accord-hybrid-2023-3.jpg"
                ]
            },
            {
                "name": "Shimano E-bike EVO",
                "brand": "Shimano",
                "model": "Evo",
                "price": 2099.99,
                "category": "E-bike",
                "quantity": 7,
                "description": "",
                "imageLinks": [
                    "shimano-evo-fron.jpg",
                    "shimano-evo-side.jpg",
                    "shimano-evo-top.jpg"
                ]
            },
            {
                "name": "Nissan ARIYA",
                "brand": "Nissan",
                "model": "ARIYA",
                "price": 55843.00,
                "category": "E-vehicle",
                "quantity": 7,
                "description": "",
                "imageLinks": [
                    "ariya01.jpg",
                    "ariya02.jpg",
                    "ariya03.jpg"
                ]
            },
            {
                "name": "Nissan LEAF",
                "brand": "Nissan",
                "model": "LEAF",
                "price": 44093.00,
                "category": "E-vehicle",
                "quantity": 7,
                "description": "",
                "imageLinks": [
                    "leaf01.jpg",
                    "leaf02.jpg",
                    "leaf03.jpg"
                ]
            },
            {
                "name": "Tesla Model S",
                "brand": "Tesla",
                "model": "Model S",
                "price": 122990.00,
                "category": "E-vehicle",
                "quantity": 7,
                "description": "",
                "imageLinks": [
                    "model_s_01.jpg",
                    "model_s_02.jpg",
                    "model_s_03.jpg"
                ]
            },
        ];

        Product.insertMany(products);



        /**
         * ...if I make a request to search for products based on a brand,
         */
        let searchProductUrl = "/searchProducts?brands=" + "Tesla,Honda";
        searchProductUrl += "&categories=" + "E-vehicle";

        const response = await request(app).get(searchProductUrl);
        const searchedProducts = response.body.products;

        const allProducts = await Product.find();



        /**
         * ...then it should return products with names containing the name phrase.
         */
        expect(allProducts.length).toBe(6);
        expect(searchedProducts.length).toBe(3);


        searchedProducts.forEach((product) => {
            const isProductFound = (product.brand == "Tesla" || product.brand == "Honda");
            expect(isProductFound).toBe(true);
        });
    });
});

