const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
    {
        product_id : [{type : mongoose.Schema.Types.ObjectId, ref : "product", required : true},],
    },
    {
        versionKey : false,
    }
);
module.exports = mongoose.model("cart", cartSchema);
