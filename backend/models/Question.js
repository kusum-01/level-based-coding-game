const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  topic: String,
  level: Number,
  question: String,
  options: [String],
  answer: String,
});

module.exports = mongoose.model("Question", questionSchema);
