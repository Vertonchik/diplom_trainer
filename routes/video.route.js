const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// controllers
const {
  videoController,
  createVideoController,
  updateVideoController,
} = require('../controllers/video.controller.js');

router.get('/', [authMiddleware], videoController);
router.post('/create', [authMiddleware, roleMiddleware('ADMIN')], createVideoController);
router.put('/update', [authMiddleware, roleMiddleware('ADMIN')], updateVideoController);


module.exports = router