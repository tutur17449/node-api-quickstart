const mongoose = require("mongoose");

const mongoInit = () => {
  return mongoose.connect(
    `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_INITDB_DATABASE}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

module.exports = mongoInit;
