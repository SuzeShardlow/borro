const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  borower_id: { type: mongoose.Schema.ObjectId, ref: 'User' },
  owner_id: { type: mongoose.Schema.ObjectId, ref: 'User' },
  item_id: { type: mongoose.Schema.ObjectId, ref: 'Item' },
  message: { type: String, required: true }
});

module.exports = mongoose.model('Request', requestSchema);
