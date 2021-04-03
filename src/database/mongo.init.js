const mongoose = require("mongoose");

const mongoInit = () => {
  return mongoose.connect(
    `mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/`,
    {
      dbName: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      pass: process.env.DATABASE_PASSWORD,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

module.exports = mongoInit;
