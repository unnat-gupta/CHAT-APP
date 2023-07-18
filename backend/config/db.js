const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan);
  } catch (error) {
    console.log(`ERROR: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
