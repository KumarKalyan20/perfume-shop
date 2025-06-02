const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("../models/product");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    return Product.insertMany([
        {
        name: "Bleu De Chanel",
        description: "an aromatic-woody fragrance for men, designed to embody freedom",
        price: 1044.99,
        images: [
          "images/bleu.jpg",
        ],
      },

      {
       name: "Amber Wood",
       description: "Amber Wood is a stunning warm, woody-ambery fragrance for men and women",
       price: 999.99,
      images: [
        "images/amber.jpg",
       
       ],
      },

      {
        name: "Rose Essence",
        description: "A delicate floral perfume with a long-lasting scent.",
        price: 789.99,
        images: [
          "images/rose-essence.jpeg",
        ],
      },
      {
        name: "Wild Stone",
        description: "designed for men, often featuring a blend of woody, spicy",
        price: 348.99,
        images: [
          "images/wildstone.jpg",
        ],
      },

      {
        name: "Dior",
        description: "the vibrant energy of love and youth to the allure of femininity",
        price: 899.99,
        images: [
          "images/dior.jpg",
        ],
      },
      {
        name: "Denver",
        description: "An exotic blend of amber and woody tones.",
        price: 274.50,
        images: [
          "images/denver.jpg",       
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
