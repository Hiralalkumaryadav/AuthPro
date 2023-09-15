const Mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  try {
    const url ="mongodb+srv://yadavhiralalkumar9:hiralal123@cluster0.fifm3zu.mongodb.net/?retryWrites=true&w=majority"
    Mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;
