const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: { type: String, trim: true, required: true },
  category: { type: String, required: true },
  type: { type: String, trim: true, required: true },
  make: { type: String, trim: true },
  model: { type: String, trim: true },
  photo: { type: Array, trim: true, required: true },
  noteFromTheOwner: { type: String }
});

module.exports = mongoose.model('Item', itemSchema);
