const express = require("express");

const router = express.Router();

const Product = require("../models/product.models");

router.get("/women", async (req, res) => {
    try {

        const product = await Product.find().lean().exec();

        return res.status(201).send(Product);

    } catch (error) {

        return res.status(500).send({message: error.message});

    }
});


router.get("/men", async (req, res) => {
    try {

        const product = await Product.find().lean().exec();

        return res.status(201).send(Product);

    } catch (error) {

        return res.status(500).send({message: error.message});

    }
});



model.exports = router;