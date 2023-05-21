// const mongoose = require("mongoose");

// // mongoose.set("strictQuery", false);

const mongoose = require("mongoose");

const url = process.env.DB;

async function connectToDatabase() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected successfully to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToDatabase();
