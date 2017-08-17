const Request = require('../models/request');
const User    = require('../models/user');
const Item    = require('../models/item');

function requestsCreate(req, res) {
  Request
    .create(req.body)
    .then(request => {
      User.findById(request.borrower, (err, user) => {
        user.sent_requests.push(request._id);
        user.save();

        User.findById(request.owner, (err, user) => {
          user.received_requests.push(request._id);
          user.save();

          res.status(201).json(request);
        });
      });
    })
    .catch(err => res.status(500).json(err));
}

function requestsDelete(req, res) {
  Request
    .findById(req.params.id)
    .exec()
    .then(request => {

      console.log(request);

      if (request.status === 'pending') {
        request.remove();
        return res.sendStatus(200);
      } else {

        Item.findById(request.item, (err, item) => {
          item.borrower = undefined;
          item.save();

          request.remove();

          return res.sendStatus(200);
        });
      }
    });
}

function requestsAccept(req, res) {
  Request
    .findById(req.params.id)
    .populate('borrower owner item')
    .exec()
    .then(request => {
      request.status = 'accepted';
      request.save();

      Item
        .findById(request.item, (err, item) => {
          item.borrower = request.borrower;
          item.save();

          return res.status(200).json(request);
        });
    });
}

function requestsReject(req, res) {
  Request
    .findById(req.params.id)
    .exec()
    .then(request => {
      request.status = 'rejected';
      request.save();

      return res.status(200).json(request);
    })
    .catch(err => res.status(500).json(err));
}

module.exports = {
  create: requestsCreate,
  delete: requestsDelete,
  accept: requestsAccept,
  reject: requestsReject
};
