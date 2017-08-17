const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  borrower: { type: mongoose.Schema.ObjectId, ref: 'User' },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User' },
  item: { type: mongoose.Schema.ObjectId, ref: 'Item' },
  message: { type: String, required: true },
  status: { type: String }
});

// requestSchema.pre('remove', function(next) {
//   this.model('User').remove({ received_requests: this._id }, next);
// });

module.exports = mongoose.model('Request', requestSchema);
