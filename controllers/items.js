const Item = require('../models/item');
const User = require('../models/user');
const Category = require('../models/category');

function itemsIndex(req, res) {
  Item
  .find()
  .populate('owner')
  .exec()
  .then(items => res.status(200).json(items))
  .catch(err => res.status(500).json(err));
}

function itemsCreate(req, res, next) {
  req.body.createdBy = req.user.id;
  console.log(req.user);
  console.log(req.body);
  Category
  .findOne({name: req.body.category})
  .exec()
  .then(category => {
    req.body.category = category._id;
    Item
    .create(req.body)
    .then(item => {
      category.items.push(item._id);
      category.save();
      console.log(`CATEGORY ${category}`);
      User
      .findById(req.user.id)
      .exec()
      .then(user => {
        user.items.push(item._id);
        user.save();
        return res.status(200).json(item);
      })
      .catch(err => res.status(500).json(err));
    });
  });
}

function itemsShow(req, res) {
  Item
  .findById(req.params.id)
  .populate('owner category borrower')
  .exec()
  .then(item => {
    if (!item) res.status(404).json({message: 'no item found!'});
    return res.status(200).json(item);
  })
  .catch(err => res.status(500).json(err));
}

function itemsUpdate(req, res) {
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

function itemsDelete(req, res) {
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
  index: itemsIndex,
  create: itemsCreate,
  show: itemsShow,
  update: itemsUpdate,
  delete: itemsDelete
};
