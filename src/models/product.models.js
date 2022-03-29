const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    product: { type: String, required: true },
    price: { type: Number, required: true },
    color: { type: String, required: true },
    category: { type: String, required: true },
    sub_category: { type: String, required: true },
    imageURL: { type: String, required: true },
    overview: { type: String, required: false },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("product", productSchema);


