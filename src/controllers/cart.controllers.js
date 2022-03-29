const express = require("express");

const Cart = require("../models/cart.models");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const cart = await Cart.create(req.body);

    return res.status(201).send(cart);
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    const carts = await Cart.find().lean().exec();

    return res.status(200).send(carts);
  } catch (err) {
    return res.status(500).send({ err: "err.message" });
  }
});


router.patch("/:id", async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send(cart);
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send(cart);
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
});

module.exports = router;