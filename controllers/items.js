const Item = require('../models/item');

function indexRoute(req, res) {
  Item
    .find()
    .exec()
    .then(items => res.status(200).json(items))
    .catch(err => res.status(500).json(err));
}

module.exports = {
  index: indexRoute
};
