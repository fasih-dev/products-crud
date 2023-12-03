const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
   title: String,
   details: String,
   price: Number
});

const productModel = mongoose.model("productModel", productSchema);

module.exports = productModel;