const express = require('express');
const cors = require('cors');
const cartController = require("./controllers/cart.controllers");
const productController = require("./controllers/product.controllers");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/carts", cartController)
app.use("", productController);


module.exports  = app;