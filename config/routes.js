const express         = require('express');
const router          = express.Router();
const items           = require('../controllers/items');
const users           = require('../controllers/users');

// const authentications = require('../controllers/authentications');

// router.route('/register')
//   .post(authentications.register);
// router.route('/login')
//   .post(authentications.login);

router.route('/items')
  .get(items.index);

router.route('/users')
  .get(users.index);
router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);

module.exports = router;
