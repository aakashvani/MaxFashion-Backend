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

router.get("/:id", async (req, res) => {
  try {
     let user_id = req.user._id
    const carts = await Cart.findOne({user_id : user_id}).populate({path : "product_id"}).lean().exec();

    return res.status(200).send("carts", {items : product_id});
  } catch (err) {
    return res.status(500).send({ err: err.message});
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

router.get("/currentuser", async (req, res) => {
   try { 
     let user_id = req.user._id; 
    const items = await Cart.findOne({ user_id: user_id }) .populate({ path: "product_id"}) .lean() .exec();
     return res.render("cart", { items: product_id }); 
  } catch (err) {
     res.send(err.message); res.render('error')
     } }); 


module.exports = router;