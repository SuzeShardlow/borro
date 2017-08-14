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

  //make sure to imbed the items
//   function usersShow(req, res) {
//   User
//     .findById(req.params.id)
//     .populate('trip')
//     .exec()
//     .then((user) => {
//       Trip
//         .find({createdBy: user._id})
//         .exec()
//         .then(trips => {
//           res.render('users/show', {user, trips});
//         });
//     });
// }
}

module.exports = {
  index: usersIndex,
  show: usersShow,
  delete: usersDelete,
  update: usersUpdate
};
