const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
    {   
        product : [{
            productName: { type: String, required: true },
            price: { type: Number, required: true },
            color: { type: String, required: true },
            category: { type: String, required: true },
            sub_category: { type: String, required: true },
            imageURL: { type: String, required: true },
            overview: { type: String, required: false },
          }],
        user_id : {type : mongoose.Schema.Types.ObjectId, ref : "users", required : true},
       
    },
    {
        versionKey : false,
    }
);
module.exports = mongoose.model("cart", cartSchema);
