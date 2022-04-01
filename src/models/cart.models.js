const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
    {
        user_id : {type : mongoose.Schema.Types.ObjectId, ref : "users", required : true},
        product_id : [{type : mongoose.Schema.Types.ObjectId, ref : "product", required : true}],
    },
    {
        versionKey : false,
    }
);
module.exports = mongoose.model("cart", cartSchema);
