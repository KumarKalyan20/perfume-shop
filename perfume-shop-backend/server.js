const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load environment variables from .env file
dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routers/authRoutes"));
app.use("/api/products", require("./routers/productRoutes"));
app.use("/api/user", require("./routers/userRoutes"));

// Default route to check if server is running
app.get("/", (req, res) => {
  res.send("Perfume Shop Backend is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
