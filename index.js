const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Load environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process if DB connection fails
  });

// Example test route
app.get("/", (req, res) => {
  res.send("Student Project Tracker API is running...");
});
