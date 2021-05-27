const express = require('express');
const router = express.Router();

// validations
const {
  loginValidator,
  registerValidator,
} = require('../utils/helpers/valid');


// controllers
const {
  registerController,
  loginController,
} = require('../controllers/auth.controller.js');

router.post('/register', registerValidator, registerController);
router.post('/login', loginValidator, loginController);

module.exports = router