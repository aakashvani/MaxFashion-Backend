const express = require("express");

const router = express.Router();

const Product = require("../models/product.models");

/// prdoucts== womens data


router.get("/products", async (req, res) => {
    try {

        const products = await Product.find().lean().exec();
        // console.log(products);

        return res.status(200).send(products);

    } catch (error) {

        return res.status(500).send({message: error.message});

    }
});

router.get("/products/:id", async (req, res) => {
    try {

        const products = await Product.findById(req.params.id).lean().exec();
        

        return res.status(200).send(products);

    } catch (error) {

        return res.status(500).send({message: error.message});

    }
});







module.exports = router;