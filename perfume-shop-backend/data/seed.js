const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("../models/product");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    return Product.insertMany([
      {
        name: "Rose Essence",
        description: "A delicate floral perfume with a long-lasting scent.",
        price: 29.99,
        images: [
          "images/rose-essence.jpeg",
          "images/rose-essence.jpeg"
        ],
      },
      {
        name: "Wild Stone",
        description: "A refreshing fragrance inspired by sea waves.",
        price: 34.99,
        images: [
          "images/wildstone.jpg",
          "images/wildstone.jpg"
        ],
      },
      {
        name: "Amber Wood",
        description: "An exotic blend of amber and woody tones.",
        price: 44.50,
        images: [
          "https://example.com/amber1.jpg",
          "https://example.com/amber2.jpg"
        ],
      },
    ]);
  })
  .then(() => {
    console.log("Sample products inserted!");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Error inserting products:", err);
  });
