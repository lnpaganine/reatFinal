const mongoose = require("mongoose");

const food = new mongoose.Schema({
  id: { type: Number },
  name: { type: String },
  price: { type: Number },
  image: { type: String },
});

module.exports = mongoose.model("food", food);
