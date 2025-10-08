const mongoose = require('mongoose');
require('dotenv').config(); // Load .env

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODBATLAS_URI);
    console.log("MongoDB Connected Successfully!");
  } catch (err) {
    console.error("MongoDB Connection Failed:", err.message);
    process.exit(1); //exit process with failure bm
  };
};

module.exports = {connectDB, mongoose};
