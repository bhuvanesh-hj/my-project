const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

mongoose.models = {};
module.exports = mongoose.model("Todos", todoSchema);
