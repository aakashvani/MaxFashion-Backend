const express = require("express");

const router = express.Router();

const mensProduct = require("../models/men.model");

/// mensprdoucts== mens data


router.get("/mens", async (req, res) => {
    try {

        const mensproducts = await mensProduct.find().lean().exec();
        // console.log(products);

        return res.status(200).send(mensproducts);

    } catch (error) {

        return res.status(500).send({message: error.message});

    }
});

router.get("/mens/:id", async (req, res) => {
    try {

        const menproduct = await mensProduct.findById(req.params.id).lean().exec();
        

        return res.status(200).send(menproduct);

    } catch (error) {

        return res.status(500).send({message: error.message});

    }
});







module.exports = router;