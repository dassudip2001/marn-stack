const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    console.log("Connecting to MongoDB...");

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.log("MongoDB connection failed");
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDb;
