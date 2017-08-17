const User = require('../models/user');
const Item = require('../models/item');

function usersIndex(req, res) {
  User.find((err, users) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    return res.status(200).json(users);
  });
}

function usersShow(req, res) {
  User
    .findById(req.params.id)
    .populate({
      path: 'received_requests',
      model: 'Request',
      populate: [
        {
          path: 'item',
          model: 'Item'
        },
        {
          path: 'borrower',
          model: 'User'
        },
        {
          path: 'owner',
          model: 'User'
        }
      ]
    })
    .populate({
      path: 'sent_requests',
      model: 'Request',
      populate: [
        {
          path: 'item',
          model: 'Item'
        },
        {
          path: 'borrower',
          model: 'User'
        },
        {
          path: 'owner',
          model: 'User'
        }
      ]
    })
    .exec()
    .then(user => {
      Item.find({ owner: user._id }, (err, items) => {
        user.items = items;
        res.json(user);
      });
    });
}

function usersUpdate(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body.user, { new: true }, (err, user) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    if (!user) return res.status(404).json({ message: 'User not found.' });
    return res.status(200).json(user);
  });
}

function usersDelete(req, res) {
  User.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    if (!user) return res.status(404).json({ message: 'User not found.' });
    return res.sendStatus(204);
  });
}


module.exports = {
  index: usersIndex,
  show: usersShow,
  delete: usersDelete,
  update: usersUpdate
};
