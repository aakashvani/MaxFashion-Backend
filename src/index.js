const express = require('express');
const cors = require('cors');
const cartController = require("./controllers/cart.controllers");
const womensdatasController = require('./controllers/women.controller')
const app = express();

app.use(cors());
app.use(express.json());

app.use("/carts", cartController)
app.use("/womensdatas", womensdatasController);


module.exports  = app;