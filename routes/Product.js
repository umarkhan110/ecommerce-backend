const express = require('express')
const router = express.Router();
const Product = require("../models/Product")
const Authenticate = require("../Authentication")


router.post('/add', async (req, res) => {
    const { title, desc, img, price, inStock } = req.body;
    try {
        const prodoct = new Product({ title, desc, img, price, inStock });
        await prodoct.save();
        return res.status(200).json({ message: "Product  Added Successfully" });

    } catch (error) {
        console.log(error)
    }
})

//Signin Route for Service Provider
router.get('/product', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.log(error)
    }
})

router.get('/find/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;