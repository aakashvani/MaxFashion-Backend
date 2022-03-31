const mongoose = require('mongoose');

const menSchema= new mongoose.Schema(
    {
        productName: { type: String, required: true },
        price: { type: Number, required: true },
        color: { type: String, required: true },
        category: { type: String, required: true },
        sub_category: { type: String, required: true },
        imageURL: { type: String, required: true },
        overview: { type: String, required: false },
    },
    {
        versionKey : false,
    }
);

const menProduct= mongoose.model("mensproducts",menSchema);

module.exports = menProduct;