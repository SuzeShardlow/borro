const express         = require('express');
const router          = express.Router();
const items           = require('../controllers/items');
const users           = require('../controllers/users');
const requests        = require('../controllers/requests');
const authentications = require('../controllers/authentications');

// Authentication
router.route('/register')
  .post(authentications.register);
router.route('/login')
  .post(authentications.login);

// Items
router.route('/items')
  .get(items.index)
  .post(items.create);
router.route('/items/:id')
  .get(items.show)
  .put(items.update)
  .delete(items.delete);

// Users
router.route('/users')
  .get(users.index);
router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);

// Requests
router.route('/requests')
  .get(requests.index)
  .post(requests.create);
router.route('/requests/:id')
  .put(requests.edit)
  .delete(requests.delete);
router.route('/requests/:id/accept')
  .post(requests.accept);
router.route('/requests/:id/reject')
  .post(requests.reject);


module.exports = router;
