const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/nytreact" );

const BookSeed = [
  {
    title: "Catcher in the Wheat",
    date: new Date(Date.now()),
    url: "www.google.com"
  },
  {
    title: "Triassic Park",
    date: new Date(Date.now()),
    url: "www.google.com"
  },
  {
    title: "Savannah Gump",
    date: new Date(Date.now()),
    url: "www.google.com"
  },
  {
    title: "Cranberries of Wrath",
    date: new Date(Date.now()),
    url: "www.google.com"
  },
  {
    title: "To Kill a Bluejay",
    date: new Date(Date.now()),
    url: "www.google.com"
  },
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(BookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
});
