// Package & Library imports
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//Path imports
const {
  register,
  login,
  generateToken,
} = require("./controllers/auth.controller");
const mensproductcontroller = require("./controllers/mensproduct.controller");
const womenController = require("./controllers/product.controllers");
const cartController = require("./controllers/cart.controllers");
const passport = require("./configs/google-oauth");
const signupController = require("./controllers/userSignUp.controller");

// Google OAuth- Login & Signup
app.post("/register", register);
app.post("/login", login);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),

  function (req, res) {
    return res.redirect("http://127.0.0.1:5502/index.html");
    const token = generateToken(req.user);
    return res.status(200).send({ user: req.user, token });
  }
);

// Route passing => Controllers
app.use("/womens", womenController);
app.use("/carts", cartController);
app.use("/mens", mensproductcontroller);
app.use("/signup", signupController);
module.exports = app;
