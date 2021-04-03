const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdOn: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", PostSchema);
