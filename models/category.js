const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {type: String, required: true},
  items: [{ type: mongoose.Schema.ObjectId, ref: 'Item' }]
});

module.exports = mongoose.model('Category', categorySchema);
