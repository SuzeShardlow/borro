const Item = require('../models/item');
const User = require('../models/user');

function indexRoute(req, res) {
  Item
  .find()
  .exec()
  .then(items => res.status(200).json(items))
  .catch(err => res.status(500).json(err));
}

function createRoute(req, res, next) {
  req.body.createdBy = req.user._id;
  Item
  .create(req.body)
  .then
  .then(item => {
    User
    .findById(req.params.id)
    .exec()
    .then(user => {
      user.items.push(item._id);
      user.save();
      return res.status(200).json(item);
    })
    .catch(next);
  });
}

function showRoute(req, res) {
  Item
  .findById(req.params.id)
  .populate('owner')
  .exec()
  .then(item => {
    if (!item) res.status(404).json({message: 'no item found!'});
    return res.status(200).json(item);
  })
  .catch(err => res.status(500).json(err));
}

function updateRoute(req, res) {
  Item
  .findById(req.params.id)
  .exec()
  .then(item => {
    if (!item) res.status(404).json({message: 'no item found!'});
    for (const field in req.body) {
      item[field] = req.body[field];
    }
    return item.save();
  })
  .then(item => res.status(200).json(item))
  .catch(err => res.status(500).json(err));
}

function deleteRoute(req, res) {
  Item
  .findById(req.params.id)
  .exec()
  .then(item => {
    if (!item) res.status(404).json({message: 'no item found!'});
    return item.remove();
  })
  .then(() => res.status(204).end())
  .catch(err => res.status(500).json(err));
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
};
