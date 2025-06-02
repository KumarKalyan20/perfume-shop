const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path"); // ✅ THIS IS IMPORTANT
const connectDB = require("./config/db");

dotenv.config();

const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ This line allows your server to serve images
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/uploads', express.static('uploads'));

// Routes
app.use("/api/auth", require("./routers/authRoutes"));
app.use("/api/products", require("./routers/productRoutes"));
app.use("/api/user", require("./routers/userRoutes"));

// Test route
app.get("/", (req, res) => {
  res.send("Perfume Shop Backend is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));