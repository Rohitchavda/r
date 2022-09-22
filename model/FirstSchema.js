const mongoose = require("mongoose");

const firstSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
});

const first = mongoose.model("sec", firstSchema);

module.exports = first;
