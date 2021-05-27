const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// controllers
const {
  listController,
  getTestController,
  updateTestController,
  createTestController,
  deleteTestController,
} = require('../controllers/test.controller.js');

router.get('/list', [authMiddleware], listController);
// admin
router.get('/byId', [authMiddleware, roleMiddleware('ADMIN')], getTestController);
router.put('/update', [authMiddleware, roleMiddleware('ADMIN')], updateTestController);
router.post('/create', [authMiddleware, roleMiddleware('ADMIN')], createTestController);
router.post('/delete', [authMiddleware, roleMiddleware('ADMIN')], deleteTestController);


module.exports = router;