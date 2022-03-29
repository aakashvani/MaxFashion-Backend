const express = require('express');
const cors = require('cors');
const cartController = require("./controllers/cart.controllers")
const app = express();

app.use(cors());
app.use(express.json());

app.use("/carts", cartController)

module.exports  = app;