const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();


app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;


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
    process.exit(1); 
  });


app.get("/", (req, res) => {
  res.send("Student Project Tracker API is running...");
});
