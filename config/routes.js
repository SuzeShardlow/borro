const express         = require('express');
const router          = express.Router();

const authentications = require('../controllers/authentications');

router.route('/register')
  .post(authentications.register);



module.exports = router;
