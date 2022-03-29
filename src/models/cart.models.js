const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
    {
        itemImg : {type : String, required : true},
        itemName : {type : String, required : true},
        itemQty : {type : Number, default : 1, required : false},
        itemPrice : {type : Number, required : true},
    },
    {
        versionKey : false,
    }
);
module.exports = mongoose.model("cart", cartSchema);
