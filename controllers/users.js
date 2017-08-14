const User = require('../models/user');

function usersIndex(req, res) {
  User
    .find((err, users) => {
      if (err) return res.status(500).json({ message: 'Something went wrong.' });
      return res.status(200).json(users);
    });
}

function usersUpdate(req, res) {

}

function usersDelete(req, res) {

}

function usersShow(req, res) {

}

module.exports = {
  index: usersIndex,
  show: usersShow,
  delete: usersDelete,
  update: usersUpdate
};
