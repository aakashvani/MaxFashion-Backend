const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "item",
        required: true,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("order", orderSchema);
