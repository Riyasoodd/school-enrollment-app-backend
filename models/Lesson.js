const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  title: String,
  subject: String,
  location: String,
  price: Number,
  availability: Number,
});

module.exports = mongoose.model("Lesson", lessonSchema);
