const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// book schema for NYT books
const bookSchema = new Schema({
  title: String,
  date: { type: Date, default: Date.now },
  url: String,
});

const book = mongoose.model("book", bookSchema);

module.exports = book;
