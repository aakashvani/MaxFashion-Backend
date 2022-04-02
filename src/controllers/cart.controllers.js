const express = require("express");

const Cart = require("../models/cart.models");

const router = express.Router();
// <-----trying new one---------->
// router.post(" ", async (req, res) => {
//   try {
//     console.log(req.user._id, req.body);
//     const item = await Cart.create({
//       ...req.body,
//       type : "cart",
//       user : req.user._id
//     });

//     return res.send(item)

//   } catch (err) {
//     return res.status(500).send({message : err.message})
//   }
// });

// router.get("", async (req, res) => {
//   try {
//       const cart = await Cart.find({type : 'cart',
//     user : req.user._id}).populate("product");

//     return res.send({cart})
//   } catch (err) {
//     return res.status(500).send({message : err.message})

//   }
// })

// <-----------------Ending trying new one------------------>
router.post("/", async (req, res) => {
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
    return res.status(500).send({ err: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let user_id = req.user._id;
    const carts = await Cart.findOne({ user_id: user_id })
      .populate({ path: "product_id" })
      .lean()
      .exec();

    return res.status(200).send("carts", { items: product_id });
  } catch (err) {
    return res.status(500).send({ err: err.message });
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
    let user_id = req.body._id;
    const items = await Cart.findOne({ user_id: user_id })
      .populate({ path: "product_id" })
      .lean()
      .exec();
    return res.send("cart", { items: product_id });
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
