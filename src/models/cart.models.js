const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    color: { type: String, required: true },
    category: { type: String, required: true },
    sub_category: { type: String, required: true },
    imageURL: { type: String, required: true },
    overview: { type: String, required: false },

    // user_id : {type : mongoose.Schema.Types.ObjectId, ref : "users", required : true},
  },
  {
    versionKey: false,
  }
);
module.exports = mongoose.model("cart", cartSchema);

// const itemSchema = new mongoose.Schema(
//     {
//   type: { type: String, required: false },
//   quantity: { type: Number, required: false },
//   product: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "product",
//     required: true,
//   },
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "user",
//     required: true,
//   },
// },
// {
//     timestamps : true,
//     versionKey : false
// }
// );

// module.exports = mongoose.model("item", itemSchema);
