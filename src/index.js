
const connect = require("./configs/db");
// const userController = require("./controllers/user.controller")
// const productController = require("./controllers/product.controller")

const {register,login, generateToken} = require("./controllers/auth.controller")

const express = require('express');
const cors = require('cors');
const cartController = require("./controllers/cart.controllers");
const productController = require("./controllers/product.controllers");
const mensproductcontroller = require("./controllers/mensproduct.controller")

const app = express();
const passport = require("./configs/google-oauth")


app.use(express.json());


// app.use("/users", userController)

app.post("/register", register)

app.post("/login", login)

// app.use("/products", productController)

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));
 
app.get(
'/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login', session:false } ),

  function(req, res) {
    // console.log(req.user)
    const token = generateToken(req.user)
    return res.status(200).send({user:req.user, token})
  }
)


app.use(cors());


app.use("/carts", cartController)
app.use("", productController);
app.use("",mensproductcontroller);



module.exports  = app;