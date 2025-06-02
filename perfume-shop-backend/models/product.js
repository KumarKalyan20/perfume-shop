const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  images: ["image1.jpg", "image2.jpg", "image3.jpg"], // Example default images
});

module.exports = mongoose.model("Product", productSchema);
